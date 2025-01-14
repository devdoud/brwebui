// import { useState } from 'react'
// import reactLogo from './assets/images/react.svg'
// import viteLogo from '/vite.svg'
// import { MyTextInput } from './helpers'
// import { Formik, Form } from "formik";
// import './index.css'
// import * as Yup from "yup";
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1 className='text-3xl font-bold underline'>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p className='text-3xl font-bold underline'>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       <Formik
//         initialValues={{
//           firtname: ""
//         }}
//         validationSchema={Yup.object({
//           firtname: Yup.string()
//           .max(3, "Must be 15 characters or less")
//           .required("Required"),
//         })}
//         onSubmit={ (values) => {
//           alert(JSON.stringify(values, null, 2));
//         }}
//       >
//         <Form>
//           <MyTextInput
//             label="FirtName"
//             name="firstName"
//             type="text"
//             placeholder="Entrez votre prenom"
//           />
//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     </>
//   )
// }

// export default App

// // voici la couleur principale a utiliser sur benin restoo : #

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline text-yellow-500">
      Hello world!
    </h1>
  );
}
