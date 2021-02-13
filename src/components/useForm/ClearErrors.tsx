import * as React from "react"
import Footer from "../Footer"
import { Menu } from "../Menu"
import api from "../../data/en/api"
import typographyStyles from "../../styles/typography.module.css"
import containerStyles from "../../styles/container.module.css"
import CodeArea from "../CodeArea"
import clearError from "../codeExamples/clearError"
import clearErrorTs from "../codeExamples/clearErrorTs"

export default ({ currentLanguage }) => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        clearErrors
      </h1>
      <p className={typographyStyles.subHeading}>Clear form errors</p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section>
            <code className={typographyStyles.codeHeading}>
              <h2>
                clearErrors:{" "}
                <span className={typographyStyles.typeText}>
                  (name?: string | string[]) =&gt; void
                </span>
              </h2>
            </code>
            {api.clearError.description}

            <CodeArea
              rawData={clearError}
              url="https://codesandbox.io/s/react-hook-form-v6-clearerrors-887rh"
              tsRawData={clearErrorTs}
              tsUrl="https://codesandbox.io/s/react-hook-form-v6-ts-clearerrors-0zry5"
            />
          </section>

          <Footer currentLanguage={currentLanguage || "en"} />
        </main>
      </div>
    </div>
  )
}
