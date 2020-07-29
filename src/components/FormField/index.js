import React from "react";

    function FormField({ label, type, name, value, onChange }) {
        return (
            <div>
                <label>
                {label}: 
                <input
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
              </label>
            </div>

        )
    }

export default FormField;
     
/* <div>
            <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
              />
            </label>
          </div>
          
         <div>
            <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
                //setNomeDaCategoria(infosDoEvento.target.value);
              />
            </label>
          </div>
          */