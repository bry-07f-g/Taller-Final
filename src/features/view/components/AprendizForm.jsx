import { useState } from "react";
import { createAprendiz } from "../../../services/aprendiz.service";

export default function AprendizForm({ onSaved }) {
    const [form, setForm] = useState({
        dni: "",
        nombre: "",
        apellido: "",
        fecha_contratacion: "",
        salario: "",
        departamento: ""
    })
    const [saving, setSaving] = useState(false)

    const onChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    }
    const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.dni.trim() || !form.nombre.trim() || !form.apellido.trim() ||
    !form.fecha_contratacion.trim() || !form.salario.trim() || !form.departamento.trim()) {
    return alert('Todos los campos son obligatorios.');
    }
    
    try {
        setSaving(true);
        await createAprendiz(form);
        setForm({
            dni: "",
            nombre: "",
            apellido: "",
            fecha_contratacion: "",
            salario: "",
            departamento: ""
        });
        onSaved?.();
        } catch (err) {
            if (err.response?.status === 409) {
                alert('Dni ya existe');
            } else if (err.response?.data?.errors) {
                alert(err.response.data.errors.map(e => e.msg).join('\n'));
            } else {
                alert('Error creando empleado')
            }
        }}

return (
    <form onSubmit={onSubmit} style={{ border: '1px solid #ddd', padding: 16, borderRadius: 8, marginBottom: 24 }}>

        <h3>Nuevo Empleado</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12}}>

            <input name="dni" placeholder="dni *"
            value={form.dni} onChange={onChange} />

            <input name="nombre" placeholder="nombre" value={form.nombre}
            onChange={onChange} />

            <input name="apellido" placeholder="apellido *" value={form.apellido}
            onChange={onChange} />

            <input type="date" name="fecha_contratacion" value={form.fecha_contratacion}
            onChange={onChange}/>

            <input name="salario" placeholder="salario" value={form.salario}
            onChange={onChange} />

            <input name="departamento" placeholder="departamento" value={form.departamento}
            onChange={onChange} />
            
        </div>
            <button type="submit" disabled={saving} style={{ marginTop: 12 }}>
            {saving ? 'Guardando...' : 'Guardar'}
            </button>
    </form>
    );
}