import { memo } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
// IMPORTANTE: Importamos o CourseNode (o nó inteiro), NÃO o CourseData
import type { CourseNode } from './nodes-edges'; 

const colors: Record<string, string> = {
  aprovado: '#dcfce7',
  cursando: '#dbeafe',
  pendente: '#f3f4f6',
  trancado: '#fee2e2',
};

const borderColors: Record<string, string> = {
  aprovado: '#16a34a',
  cursando: '#2563eb',
  pendente: '#9ca3af',
  trancado: '#dc2626',
};

// CORREÇÃO: Usamos NodeProps<CourseNode>.
// Isso faz o TypeScript entender que 'data' dentro das props é do tipo CourseData.
const CourseNode = ({ data }: NodeProps<CourseNode>) => {
  const status = data.status || 'pendente';
  
  const bgColor = colors[status] || colors.pendente;
  const borderColor = borderColors[status] || borderColors.pendente;

  return (
    <div
      style={{
        padding: '10px',
        borderRadius: '5px',
        background: bgColor,
        border: `2px solid ${borderColor}`,
        width: '170px',
        fontSize: '12px',
        textAlign: 'center',
        fontFamily: 'sans-serif',
      }}
    >
      <Handle type="target" position={Position.Top} style={{ background: '#555' }} />
      
      <div style={{ fontWeight: 'bold', fontSize: '10px', marginBottom: '5px', color: '#555' }}>
        {data.code}
      </div>
      <div style={{ fontWeight: '600', color: '#000' }}>
        {data.label}
      </div>

      <Handle type="source" position={Position.Bottom} style={{ background: '#555' }} />
    </div>
  );
};

export default memo(CourseNode);