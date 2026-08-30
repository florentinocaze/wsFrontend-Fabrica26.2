function RolesFilter({ activeRoles, onCheckboxChange }) {
    return (
        <fieldset className="roles-filter mb-8 px-2 py-1">
            <legend className="mb-2">Filtrar por classe:</legend>

            <div className="px-4 py-2 gap-4 flex justify-center items-center max-w-max rounded-sm bg-white">
                <div className="checkbox-filter flex">
                    <label htmlFor="damage-checkbox" className="mr-1">Dano</label>
                    <input 
                        type="checkbox" 
                        value="damage" 
                        checked={activeRoles.includes("damage")}
                        onChange={(event) => onCheckboxChange(event.target.value, event.target.checked)} 
                        id="damage-checkbox" 
                        name="role-checkbox"
                        className="ml-0.5"
                    />
                </div>

                <div className="checkbox-filter flex">
                    <label htmlFor="support-checkbox" className="mr-1">Suporte</label>
                    <input 
                        type="checkbox" 
                        value="support" 
                        checked={activeRoles.includes("support")}
                        onChange={(event) => onCheckboxChange(event.target.value, event.target.checked)} 
                        id="support-checkbox" 
                        name="role-checkbox"
                        className="ml-0.5"
                    />
                </div>

                <div className="checkbox-filter flex">
                    <label htmlFor="tank-checkbox" className="mr-1">Tanque</label>
                    <input 
                        type="checkbox" 
                        value="tank" 
                        checked={activeRoles.includes("tank")}
                        onChange={(event) => onCheckboxChange(event.target.value, event.target.checked)} 
                        id="tank-checkbox" 
                        name="role-checkbox"
                        className="ml-0.5"
                    />
                </div>
            </div>
        </fieldset>
    )
}

export default RolesFilter;