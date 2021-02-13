export const registerCode = `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
}`

export const registerCodeTs = `import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other"
}

interface IFormInput {
  firstName: String;
  gender: GenderEnum;
}

export default function App() {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register("firstName") />
      <label>Gender Selection</label>
      <select {...register("gender")>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
}
`

export const migrateCode = `import React from "react";
import { useForm } from "react-hook-form";

// The following component is an example of your existing Input Component 
const Input = ({ label, register, required }) => ( 
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
);

// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef(({ label }, ref) => ( 
  <>
    <label>{label}</label>
    <select name={label} ref={ref}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" register={register} required />
      <Select label="Age" {...register("Age")} />
      <input type="submit" />
    </form>
  );
}`

export const migrateCodeTs = `import React from "react";
import { useForm } from "react-hook-form";

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  register: ({ required }: { required?: boolean }) => RefReturn;
};

interface IInputProps {
  label: string;
}

// The following component is an example of your existing Input Component
const Input: React.FC<InputProps> = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
);

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { options: Option[] } & HTMLSelectElement;

// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef<SelectProps, { label: string }>(
  ({ label }, ref) => (
    <>
      <label>{label}</label>
      <select name={label} ref={ref}>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </>
  )
);

interface IFormValues {
  "First Name": string;
  Age: number;
}

const App = () => {
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit = (data: IFormValues) => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" {...register("First Name")} required />
      <Select label="Age" {...register("Age")} />
      <input type="submit" />
    </form>
  );
};
`

export const uiLibrary = `import React from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import Input from "@material-ui/core/Input";
import { Input as InputField } from "antd";

export default function App() {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = data => console.log(data);
  
  const handleChange = (e) => {
    setValue("AntdInput", e.target.value);
  }
  
  React.useEffect(() => {
    register("AntdInput"); // custom register Antd input
  }, [register])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField name="name" onChange={handleChange} />
      <input type="submit" />
    </form>
  );
}
`

export const uiLibraryTs = `import React from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import Input from "@material-ui/core/Input";
import { Input as InputField } from "antd";

interface IFormInput {
  name: string
}

export default function App() {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = data => console.log(data);
  
  const handleChange = (e) => {
    setValue("AntdInput", e.target.value);
  }
  
  React.useEffect(() => {
    register("AntdInput"); // custom register Antd input
  }, [register])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField name="name" onChange={handleChange} />
      <input type="submit" />
    </form>
  );
}`

export const uiLibraryHookInput = `import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";

const App = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: IFormInput) => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => <input {...field} />}
      />
      <Controller
        name="iceCreamType"
        control={control}
        render={({ field }) => <Select 
          {...field} 
          options={[
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" }
          ]} 
        />}
      />
      <input type="submit" />
    </form>
  );
};
`

export const uiLibraryHookInputTs = `import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";

interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: string;
}

const App = () => {
  const { control, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => <input {...field} />}
      />
      <Controller
        name="iceCreamType"
        control={control}
        render={({ field }) => <Select 
          {...field} 
          options={[
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" }
          ]} 
        />}
      />
      <input type="submit" />
    </form>
  );
};`

export const controlledComponent = `import React from "react";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import { TextField, Checkbox } from "@material-ui/core";

function App() {
  const methods = useForm();
  const { handleSubmit, control, reset } = methods;
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="MyCheckbox"
        control={control}
        defaultValue={false}
        rules={{ required: true }}
        render={({ field }) => <Checkbox {...field} />}
      />
    </form>
  );
}
`

export const controlledComponentTs = `import React from "react";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import { TextField, Checkbox } from "@material-ui/core";

interface IFormInputs {
  TextField: string
  MyCheckbox: boolean
}

function App() {
  const methods = useForm<IFormInputs>();
  const { handleSubmit, control, reset } = methods;
  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="MyCheckbox"
        control={control}
        defaultValue={false}
        rules={{ required: true }}
        render={({ field }) => <Checkbox {...field} />}
      />
    </form>
  );
}
`

export const globalState = `import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import updateAction from "./actions";

export default function App(props) {
  const { register, handleSubmit, setValue } = useForm();
  // Submit your data into Redux store
  const onSubmit = data => props.updateAction(data);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("firstName")} defaultValue={props.firstName} />
      <Input {...register("lastName")} defaultValue={props.lastName} />
      <input type="submit" />
    </form>
  );
}

// Connect your component with redux
connect(({ firstName, lastName }) => ({ firstName, lastName }), updateAction)(YourForm);
`

export const errors = `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("firstName", { required: true })} />
      {errors.firstName && <p>First name is required</p>}
      <Input {...register("lastName", { required: true })} />
      {errors.lastName && <p>Last name is required</p>}
      <input type="submit" />
    </form>
  );
}
`

export const errorsTs = `import React from "react";
import { useForm } from "react-hook-form";

interface IFormInputs {
  firstName: string
  lastName: string
}

export default function App() {
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>();
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("firstName", { required: true })} />
      {errors.firstName && <p>First name is required</p>}
      <Input {...register("lastName", { required: true })} />
      {errors.lastName && <p>Last name is required</p>}
      <input type="submit" />
    </form>
  );
}
`

export const applyValidation = `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
}`

export const applyValidationTs = `import React from "react";
import { useForm } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

export default function App() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
}`
