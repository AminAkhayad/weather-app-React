import PropTypes from "prop-types";
import { isEmptyText } from "@helpers/helper";
const Input =({type= "text",error,multipleLines,label,name,id,value,disabled=false,onchange,onblur}) => {
const InputType =  multipleLines ? "textarea" : "input";
const hasError =!isEmptyText(error);


return (<div className="form-group">
    {label &&(
        <label  htmlFor="email">{label}</label>
    )}
    <InputType name={name} id={id} value={value} type={type} disabled={disabled} onChange={onchange} onBlur={onblur} />
    {hasError && <div className="error">{error}</div>}
    
</div>)
}
Input.propTypes = {
    type: PropTypes.string,
    error: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    multipleLines: PropTypes.bool,
    onchange: PropTypes.func,
    onblur: PropTypes.func
}
export default Input;

