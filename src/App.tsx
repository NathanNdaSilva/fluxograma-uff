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
  type Connection,
  type Node,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import { initialNodes, initialEdges } from './nodes-edges';
import { getLayoutedElements } from './utils';
import CourseNode from './CourseNode';

// 1. Calcula o layout padrão (do arquivo)
const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges
);

const FLOW_KEY = 'meu-fluxo-v1';

export default function App() {
  // 2. CORREÇÃO: Preparamos os dados ANTES de chamar o hook
  // Tenta ler do navegador. Se der erro ou não existir, usa o padrão.
  const savedNodes = useMemo(() => {
    try {
      const saved = localStorage.getItem(FLOW_KEY);
      return saved ? JSON.parse(saved) : layoutedNodes;
    } catch {
      return layoutedNodes;
    }
  }, []); // Array vazio = roda só uma vez ao iniciar

  // Agora passamos o valor direto (savedNodes) e não uma função
  const [nodes, setNodes, onNodesChange] = useNodesState(savedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  const nodeTypes = useMemo(() => ({
    course: CourseNode,
  }), []);

  // Salva no navegador sempre que mudar
  useEffect(() => {
    if (nodes.length > 0) {
      localStorage.setItem(FLOW_KEY, JSON.stringify(nodes));
    }
  }, [nodes]);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  // 3. CORREÇÃO: Tipagem correta para evitar o @ts-ignore
  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    // Dizemos que 'cycle' é um Objeto onde Chave é string e Valor é string
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
          // Agora o TypeScript sabe que 'cycle' aceita qualquer string como chave
          const nextStatus = cycle[currentStatus] || 'pendente';
          
          return {
            ...n,
            data: {
              ...n.data,
              status: nextStatus,
            },
          };
        }
        return n;
      })
    );
  }, [setNodes]);

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
      </ReactFlow>
    </div>
  );
}