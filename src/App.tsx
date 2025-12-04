import { useCallback, useMemo, useEffect } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  BackgroundVariant,
  Panel, // <--- Importamos o Panel para criar botões na tela
  type Connection,
  type Node,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import { initialNodes, initialEdges } from './nodes-edges';
import { getLayoutedElements } from './utils';
import CourseNode from './CourseNode';

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges
);

const FLOW_KEY = 'meu-fluxo-v1';

export default function App() {
  const savedNodes = useMemo(() => {
    try {
      const saved = localStorage.getItem(FLOW_KEY);
      return saved ? JSON.parse(saved) : layoutedNodes;
    } catch {
      return layoutedNodes;
    }
  }, []);

  const [nodes, setNodes, onNodesChange] = useNodesState(savedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  const nodeTypes = useMemo(() => ({
    course: CourseNode,
  }), []);

  useEffect(() => {
    if (nodes.length > 0) {
      localStorage.setItem(FLOW_KEY, JSON.stringify(nodes));
    }
  }, [nodes]);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    const cycle: Record<string, string> = {
      pendente: 'cursando',
      cursando: 'aprovado',
      aprovado: 'trancado',
      trancado: 'pendente'
    };

    setNodes((nds) =>
      nds.map((n) => {
        if (n.id === node.id) {
          const currentStatus = (n.data.status as string) || 'pendente';
          const nextStatus = cycle[currentStatus] || 'pendente';
          
          return { ...n, data: { ...n.data, status: nextStatus } };
        }
        return n;
      })
    );
  }, [setNodes]);

  // Função para limpar tudo
  const resetProgress = () => {
    if (confirm('Tem certeza? Isso apagará todo o seu progresso salvo.')) {
      localStorage.removeItem(FLOW_KEY);
      window.location.reload();
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        
        {/* Painel com o Botão de Reset */}
        <Panel position="top-right">
          <button 
            onClick={resetProgress}
            style={{
              padding: '8px 16px',
              borderRadius: '5px',
              border: 'none',
              background: '#dc2626',
              color: 'white',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            Limpar Progresso
          </button>
        </Panel>

      </ReactFlow>
    </div>
  );
}