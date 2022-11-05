import { For } from "solid-js";

import { Button, useColorMode } from "../src";
import { SpinnerIcon } from "../src/icon/icon-set";

export default function App() {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <button onClick={toggleColorMode}>Toggle color mode</button>
      <div
        style={{
          margin: "16px",
          display: "flex",
          "flex-direction": "column",
          "align-items": "center",
          gap: "16px",
        }}
      >
        <Button size="sm" leftIcon={<SpinnerIcon />} rightIcon={<SpinnerIcon />}>
          Button
        </Button>
        <Button size="md" leftIcon={<SpinnerIcon />} rightIcon={<SpinnerIcon />}>
          Button
        </Button>
        <Button size="lg" leftIcon={<SpinnerIcon />} rightIcon={<SpinnerIcon />} isDisabled>
          Button
        </Button>
        <div>
          <For each={["solid", "soft", "outlined", "plain"]}>
            {variant => (
              <div
                style={{
                  margin: "16px",
                  display: "flex",
                  "align-items": "center",
                  gap: "16px",
                }}
              >
                <For each={["primary", "secondary", "danger"]}>
                  {color => (
                    <div
                      style={{
                        margin: "16px",
                        display: "flex",
                        "align-items": "center",
                        gap: "16px",
                      }}
                    >
                      <Button variant={variant as any} color={color as any} size="sm">
                        Button
                      </Button>
                      <Button variant={variant as any} color={color as any} size="md">
                        Button
                      </Button>
                      <Button variant={variant as any} color={color as any} size="lg" isDisabled>
                        Button
                      </Button>
                    </div>
                  )}
                </For>
              </div>
            )}
          </For>
        </div>
      </div>
    </>
  );
}
