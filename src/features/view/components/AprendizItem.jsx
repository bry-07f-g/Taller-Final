import { useState } from "react";

import { deleteAprendiz, updateAprendiz } from "../../../services/aprendiz.service";

export default function AprendizItem({ ap, onChange }) {
    const [edit, setEdit] = useState(false);
    const [form, setForm] = useState(ap);
    const [saving, setSaving] = useState(false);

    const onField = (e) => {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    };

    const onSave = async () => {
        try {
            setSaving(true);
            await updateAprendiz(ap._id, {
                dni: form.dni,
                nombre: form.nombre,
                apellido: form.apellido,
                fecha_contratacion: form.fecha_contratacion,
                salario: form.salario,
                departamento: form.departamento,
            })
            setEdit(false);
            onChange?.();
        }   catch (err) {
            console.error(err);
            if (err.response?.status === 409) {
                alert('Dni ya existe.');
            } else if (err.response?.data?.errors) {
            alert(err.response.data.errors.map(e => e.msg).join('\n'));
            } else {
            alert('Error actualizando');
            }
            } finally {
                setSaving(false);
        }
    };

    const onDelete = async () => {
        if (!confirm('¿Eliminar aprendiz?')) return;
        try {
            await deleteAprendiz(ap._id);
            onChange?.();
        } catch (err) {
            console.error(err);
            alert('Error eliminando');
        }
    };

    return (
        <tr>

            <td>
            {edit ? <input name="dni" value={form.dni}
            onChange={onField} /> : ap.dni}
            </td>

            <td>
            {edit ? <input name="nombre" value={form.nombre}
            onChange={onField} /> : ap.nombre}
            </td>

            <td>
            {edit ? <input name="apellido" value={form.apellido}
            onChange={onField} /> : ap.apellido}
            </td>

            <td>
            {edit ? <input name="fecha_contratacion" value={form.fecha_contratacion ?? ''}
            onChange={onField} /> : (ap.fecha_contratacion || '')}
            </td>

            <td>
            {edit ? <input name="salario" value={form.salario ?? ''}
            onChange={onField} /> : (ap.salario || '')}
            </td>

            <td>
            {edit ? <input name="departamento" value={form.departamento ?? ''}
            onChange={onField} /> : (ap.departamento || '')}
            </td>
            
            <td style={{ whiteSpace: 'nowrap' }}>
            {edit ? (
            <>
            <button onClick={onSave} disabled={saving}>Guardar</button>
            <button onClick={() => { setEdit(false); setForm(ap); }}

            style={{ marginLeft: 8 }}>Cancelar</button>

            </>
            ) : (
            <>
            <button onClick={() => setEdit(true)}>Editar</button>
            <button onClick={onDelete} style={{ marginLeft: 8

            }}>Eliminar</button>
            </>
            )}
            </td>
        </tr>
        );
}