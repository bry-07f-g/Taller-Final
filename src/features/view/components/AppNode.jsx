import { useEffect, useState } from "react";
import { listAprendices } from "../../../services/aprendiz.service";
import AprendizForm from './AprendizForm';
import AprendizList from './AprendizList';

export default function AppNode() {
    const [items, setItems] = useState([]);
    const [q, setQ] = useState('');
    const [loading, setLoading] = useState(true);

    const loadData = async () => {
        try {
            setLoading(true);
            const res = await listAprendices({ q });
            setItems(res.data.items ?? res.data);
        } catch (err) {
            console.error('Error cargando aprendices', err);
            alert('No se pudo cargar la lista');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        loadData();
    };

    return (
        <main style={styles.container}>

            <h1 style={styles.title}>
                Gestión de empleados
            </h1>

            <form onSubmit={handleSearch} style={styles.searchForm}>
                <input
                    placeholder="Buscar por DNI, nombres o apellidos"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    style={styles.input}
                />

                <div style={styles.buttonsContainer}>
                    <button type="submit" style={styles.btnPrimary}>
                        Buscar
                    </button>

                    <button
                        type="button"
                        style={styles.btnSecondary}
                        onClick={() => {
                            setQ('');
                            loadData();
                        }}
                    >
                        Limpiar
                    </button>
                </div>
            </form>

            <div style={styles.card}>
                <h3 style={styles.subtitle}>Nuevo Empleado</h3>
                <AprendizForm onSaved={loadData} />
            </div>

            <div style={styles.listContainer}>
                {loading ? (
                    <p style={styles.loading}>Cargando...</p>
                ) : (
                    <AprendizList items={items} onChange={loadData} />
                )}
            </div>
        </main>
    );
}

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px 16px'
    },

    title: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 'clamp(1.5rem, 4vw, 2.2rem)'
    },

    subtitle: {
        marginBottom: 12,
        fontSize: 'clamp(1rem, 3vw, 1.3rem)'
    },

    searchForm: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        marginBottom: 20
    },

    input: {
        flex: '1 1 300px',
        padding: 12,
        borderRadius: 10,
        border: '1px solid #ccc',
        fontSize: 14
    },

    buttonsContainer: {
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap'
    },

    card: {
        background: '#fff',
        padding: 20,
        borderRadius: 12,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    },

    /* 📋 LISTA */
    listContainer: {
        marginTop: 20,
        overflowX: 'auto'
    },

    loading: {
        textAlign: 'center'
    },

    btnPrimary: {
        background: '#1976d2',
        color: '#fff',
        border: 'none',
        padding: '10px 16px',
        borderRadius: 8,
        cursor: 'pointer',
        minWidth: 100
    },

    btnSecondary: {
        background: '#e0e0e0',
        border: 'none',
        padding: '10px 16px',
        borderRadius: 8,
        cursor: 'pointer',
        minWidth: 100
    }
};