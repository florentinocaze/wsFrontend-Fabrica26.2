function RolesFilter({ activeRoles, onCheckboxChange }) {
    return (
        <fieldset>
            <legend>Filtrar por classe:</legend>

        <div className="checkbox-filter">
            <label htmlFor="damage-checkbox">Dano</label>
            <input 
                type="checkbox" 
                value="damage" 
                checked={activeRoles.includes("damage")}
                onChange={(event) => onCheckboxChange(event.target.value, event.target.checked)} 
                id="damage-checkbox" 
                name="role-checkbox"/>
        </div>

        <div className="checkbox-filter">
            <label htmlFor="support-checkbox">Suporte</label>
            <input 
                type="checkbox" 
                value="support" 
                checked={activeRoles.includes("support")}
                onChange={(event) => onCheckboxChange(event.target.value, event.target.checked)} 
                id="support-checkbox" 
                name="role-checkbox"/>
        </div>

        <div className="checkbox-filter">
            <label htmlFor="tank-checkbox">Tanque</label>
            <input 
                type="checkbox" 
                value="tank" 
                checked={activeRoles.includes("tank")}
                onChange={(event) => onCheckboxChange(event.target.value, event.target.checked)} 
                id="tank-checkbox" 
                name="role-checkbox"/>
        </div>
        </fieldset>
    )
}

export default RolesFilter;