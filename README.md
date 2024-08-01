#Using Toast component

Namings

1. Sent
2. Warn
3. Warning - (has Try again onClick button)
4. Error - (has Try again onClick button)

All the above Toasters have only one arguement except 3 and 4.

To use a Toast simply replace an error or alert with the appropriate toaster .

eg onClick= {() => sent('your message')}

for toasts 3 and 4 , use a max. of 2 arguements

eg onClick= {() => sent('your message', () => {})}

Naming Convection

- The full name eg sent, warn, warning, error
  has a complete structure including cancel button , try again etc

A toast without the cancel button is called eg sentWithoutCancel,
A toast with the cancel button is called eg sentWithCancel,
A toast without the tryagain button is called eg sentWithoutTryagain,

for toasts in White use eg. sentWhite
for toasts in Black use eg. sentBlack
for toasts in Yellow use eg. warningYellow

check toast.tsx under components for more information

Sample

<!-- import {
  error,
  errorRed,
  errorWithCancel,
  errorWithoutCancel,
  errorWthoutTryagain,
  sent,
  sentWhite,
  warn,
  warnBlack,
  warning,
  warningWhite,
  warningWithoutCancel,
  warningYellow,
} from "./components/Toasts"; -->

returns

 <!-- <button
          className="absolute top-[400px] p-4 rounded-lg bg-black text-white ml-5"
          onClick={() =>
            error(
              "Explain the situation as clearly and concisely as possible",
              () => {
                alert("done");
              }
            )
          }
        >
          Render my toast
        </button> -->
