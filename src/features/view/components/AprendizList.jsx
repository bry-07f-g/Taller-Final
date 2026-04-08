import { Margin } from '@mui/icons-material'
import AprendizItem from './AprendizItem'

export default function AprendizList({ items, onChange }) {
    if (!items?.length) return <p style={styles.empty}>No hay empleados registrados</p>

    return (
        <div style={styles.tableContainer}>
            <table style={styles.table}>

                <thead style={styles.thead}>
                    <tr>
                        <th>Dni</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Fecha de contratación</th>
                        <th>Salario</th>
                        <th>Departamento</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((ap) => (
                        <AprendizItem key={ap._id} ap={ap} onChange={onChange} />
                    ))}
                </tbody>

            </table>
        </div>
    )
}

/* 🎨 ESTILOS MEJORADOS */
const styles = {
    tableContainer: {
        width: '100%',
        overflowX: 'auto',
        borderRadius: 4,
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        background: '#fff'
    },

    table: {
        width: '100%',
        borderCollapse: 'collapse',
        minWidth: '700px',
    },

    thead: {
        background: '#1976d2',
        color: '#fff',
        textAlign: 'left'
    },

    th: {
        padding: '12px',
        fontSize: 'clamp(12px, 2vw, 14px)'
    },

    td: {
        padding: '10px',
        borderBottom: '1px solid #eee',
        fontSize: 'clamp(12px, 2vw, 14px)'
    },

    empty: {
        textAlign: 'center',
        padding: 20,
        color: '#777'
    }
}