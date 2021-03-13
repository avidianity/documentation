import * as React from "react"
import colors from "../../styles/colors"
import enzymeInput from "../../components/codeExamples/enzymeInput"
import focusController from "../../components/codeExamples/focusController"
import toggleFields from "../../components/codeExamples/toggleFields"
import CodeArea from "../../components/CodeArea"
import typographyStyles from "../../styles/typography.module.css"
import tableStyles from "../../styles/table.module.css"
import buttonStyles from "../../styles/button.module.css"

export default {
  title: "FAQs",
  header: {
    title: "FAQs",
    description: "frequently asked questions",
  },
  questions: [
    {
      title: "Performance of React Hook Form",
      description: (
        <p>
          Performance is one of the primary reasons why this library was
          created. React Hook Form relies on uncontrolled components, which is
          the reason why the <code>register</code> function capture{" "}
          <code>ref</code>. This approach reduces the amount of re-rendering
          that occurs due to a user typing in an input or other form values
          changing. Components mount to the page faster than controlled
          components because they have less overhead. As a reference, there is a
          quick comparison test that you can refer to at{" "}
          <a
            href="https://github.com/bluebill1049/react-hook-form-performance-compare"
            target="_blank"
            rel="noopener noreferrer"
          >
            this repo link
          </a>
          .
        </p>
      ),
    },
    {
      title: "How to create an accessible input error and message?",
      description: (
        <p>
          React Hook Form is based on{" "}
          <a
            href="https://reactjs.org/docs/uncontrolled-components.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            Uncontrolled Components
          </a>
          , which gives you the ability to build an accessible custom form
          easily.
        </p>
      ),
    },
    {
      title: "Does it work with Class Components?",
      description: (
        <>
          <p>
            No, not out of the box. If you wanted to do this, you could build a
            wrapper around it and use it in your Class Component.
          </p>

          <blockquote>
            You can’t use Hooks inside of a class component, but you can
            definitely mix classes and function components with Hooks in a
            single tree. Whether a component is a class or a function that uses
            Hooks is an implementation detail of that component. In the longer
            term, we expect Hooks to be the primary way people write React
            components.
          </blockquote>
        </>
      ),
    },
    {
      title: "How to reset the form?",
      description: (
        <>
          <p>There are two methods to clear the form:</p>
          <ul>
            <li>
              <b>HTMLFormElement.reset()</b>
              <p>
                This method does the same thing as clicking a form's reset
                button, and only clears <code>input/select/checkbox</code>{" "}
                values.
              </p>
            </li>
            <li>
              <b>
                React Hook Form API: <code>reset()</code>
              </b>
              <p>
                React Hook Form's <code>reset</code> method will reset all field
                values, and will also clear all <code>errors</code> within the
                form.
              </p>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "How to initialize form values?",
      description: (
        <p>
          Being that React Hook Form relies on uncontrolled components, you can
          specify a <code>defaultValue</code> or <code>defaultChecked</code> to
          an individual field. However, it is more common to initialize a form
          by passing <code>defaultValues</code> to <code>useForm</code>.
        </p>
      ),
    },
    {
      title: "How to share ref usage?",
      description: (
        <p>
          React Hook Form needs a <code>ref</code> to collect the input value,
          however, you may want to use <code>ref</code> for other purposes (e.g.
          scroll into the view, or focus).
        </p>
      ),
    },
    {
      title: "What if you don't have access to ref?",
      description: (
        <>
          <p>
            You can actually <code>register</code> an input without a{" "}
            <code>ref</code>. In fact, you can manually <code>setValue</code>,{" "}
            <code>setError</code> and <code>trigger</code>.
          </p>

          <p>
            <b className={typographyStyles.note}>Note:</b> Because{" "}
            <code>ref</code> has not been registered, React Hook Form won't be
            able to register event listeners to the inputs. This means you will
            have to manually update value and error.
          </p>
        </>
      ),
    },
    {
      title: "Why is the first keystroke not working?",
      description: (
        <>
          <p>
            Double check if you are using <code>value</code> instead of{" "}
            <code>defaultValue</code>.
          </p>

          <p>
            React Hook Form is based on uncontrolled inputs, which means you
            don't need to change the input <code>value</code> via{" "}
            <code>state</code> via <code>onChange</code>. This means you don't
            need <code>value</code> at all, and in fact, you only need to set{" "}
            <code>defaultValue</code> for the initial input value.
          </p>
        </>
      ),
    },
    {
      title: "React Hook Form, Formik or Redux Form?",
      description: (
        <>
          <p>
            First of all, all libs try to solve the same problem: make the form
            building experience as easy as possible. However, there are some
            fundamental differences between the three.{" "}
            <code>react-hook-form</code> is built with uncontrolled inputs in
            mind and tries to provide your form with the best performance and
            least amount of re-renders as possible. On top of that,
            <code>react-hook-form</code> is built with React Hooks and used as a
            hook, which means there is no Component for you to import. Here are
            some of the detail differences:
          </p>

          <div className={tableStyles.tableWrapper}>
            <table className={tableStyles.table}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${colors.lightPink}` }}>
                  <th width={100} />
                  <th width={250}>
                    <p>React Hook Form</p>
                  </th>
                  <th>
                    <p>Formik</p>
                  </th>
                  <th>
                    <p>Redux Form</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Component</b>
                  </td>
                  <td>
                    <a
                      href="https://reactjs.org/docs/uncontrolled-components.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      uncontrolled
                    </a>{" "}
                    &{" "}
                    <a
                      href="https://reactjs.org/docs/forms.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      controlled
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://reactjs.org/docs/forms.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      controlled
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://reactjs.org/docs/forms.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      controlled
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Rendering</b>
                  </td>
                  <td>minimum re-render</td>
                  <td>
                    re-render according to local state changes which means as
                    you type in the input.
                  </td>
                  <td>
                    re-render according to state management lib (Redux) changes
                    which means as you type in the input.
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>API</b>
                  </td>
                  <td>Hooks</td>
                  <td>Component (RenderProps, Form, Field) + Hooks</td>
                  <td>Component (RenderProps, Form, Field)</td>
                </tr>
                <tr>
                  <td>
                    <b>Package size</b>
                  </td>
                  <td>
                    Small
                    <br />
                    <code>
                      react-hook-form@7.0.0
                      <br />
                      <b className={typographyStyles.note}>8KB</b>
                    </code>
                  </td>
                  <td>
                    Medium
                    <br />
                    <code>
                      formik@2.1.4
                      <br />
                      <b className={typographyStyles.note}>15KB</b>
                    </code>
                  </td>
                  <td>
                    Large
                    <br />
                    <code>
                      redux-form@8.3.6
                      <br />
                      <b className={typographyStyles.note}>26.4KB</b>
                    </code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Validation</b>
                  </td>
                  <td>
                    Built-in,{" "}
                    <a
                      href="https://github.com/jquense/yup"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Yup
                    </a>
                    ,{" "}
                    <a
                      href="https://github.com/vriad/zod"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Zod
                    </a>
                    ,{" "}
                    <a
                      href="https://github.com/hapijs/joi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Joi
                    </a>
                    ,{" "}
                    <a
                      href="https://github.com/ianstormtaylor/superstruct"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Superstruct
                    </a>{" "}
                    and build your own.
                  </td>
                  <td>
                    Build yourself or{" "}
                    <a
                      href="https://github.com/jquense/yup"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Yup
                    </a>
                  </td>
                  <td>Build yourself or Plugins</td>
                </tr>
                <tr>
                  <td>
                    <b>Learning curve</b>
                  </td>
                  <td>Low to Medium</td>
                  <td>Medium</td>
                  <td>Medium</td>
                </tr>
                <tr>
                  <td>
                    <b>Status</b>
                  </td>
                  <td>
                    Large Community: Well established form lib in the community
                  </td>
                  <td>
                    Large Community: Well established form lib in the community
                  </td>
                  <td>
                    Large Community: Well established form lib in the community
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: "watch vs getValues vs state",
      description: (
        <div>
          <ul>
            <li>
              <p>
                <b className={typographyStyles.note}>watch:</b> subscribe to
                either all inputs or the specified inputs changes via event
                listener and re-render based on which fields that are
                subscribed. Check out{" "}
                <a
                  href="https://codesandbox.io/s/react-hook-form-watch-with-radio-buttons-and-select-examples-ovfus"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  this codesandbox
                </a>{" "}
                for actual behaviour.
              </p>
            </li>
            <li>
              <p>
                <b className={typographyStyles.note}>getValues</b>: get values
                that are stored inside the custom hook as reference, fast and
                cheap. This method doesn’t trigger re-render.
              </p>
            </li>
            <li>
              <p>
                <b className={typographyStyles.note}>local state</b>: React
                local state represent more than just input’s state and also
                decide what to render. This will trigger on each input’s change.
              </p>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title:
        "Why is default value not changing correctly with ternary operator?",
      description: (
        <>
          <p>
            React Hook Form doesn't control your entire form and inputs, which
            is the reason why React wouldn't recognize the actual input that has
            been exchanged or swapped. As a solution, you can resolve this
            problem by giving a unique <code>key</code> prop to your input. You
            can also read more about the key props from{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://kentcdodds.com/blog/understanding-reacts-key-prop"
            >
              this article written by Kent C. Dodds
            </a>
            .
          </p>
          <CodeArea
            rawData={toggleFields}
            url="https://codesandbox.io/s/react-hook-form-faq-toggle-fields-3htr6"
          />
        </>
      ),
    },
    {
      title: "How to work with modal or tab forms?",
      description: (
        <>
          <p>
            It's important to understand React Hook Form embraces native form
            behavior by storing input state inside each input (except custom
            <code>register</code> at <code>useEffect</code>). One of the common
            misconceptions is that when working with modal or tab forms, by
            mounting and unmounting form/inputs that inputs state will remain.
            That is incorrect. Instead, the correct solution would be to build a
            new form for your form inside each modal or tab and capture your
            submission data in local or global state and then do something with
            the combined data.
          </p>

          <ul>
            <li>
              <p>
                <a
                  href="https://codesandbox.io/s/react-hook-form-modal-form-conditional-inputs-c7n0r"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Modal form and toggle inputs example
                </a>
              </p>
            </li>
            <li>
              <p>
                <a
                  href="https://codesandbox.io/s/tabs-760h9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tab form example
                </a>
              </p>
            </li>
          </ul>
        </>
      ),
    },
  ],
}
