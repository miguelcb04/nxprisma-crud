import Button from '@/components/Button'
 
function FormProveedores({ action, title, proveedor, disabled=false }) {

    return (
        <form action={action} >
            <input type='hidden' name='id' value={proveedor?.id} />
            <fieldset disabled={disabled}>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' id='nombre' name='nombre'
                    placeholder='Nombre'
                    defaultValue={proveedor?.nombre} autoFocus required></input>
               <div>
                {proveedor?.nacional
                    ? <input type='checkbox' id='nacional' name='nacional' defaultChecked/>
                    : <input type='checkbox' id='nacional' name='nacional' />
                }
                <label htmlFor='nacional'>Nacional</label>
               </div>
            </fieldset>
            <Button title={title} />
        </form>
    )
}

export default FormProveedores