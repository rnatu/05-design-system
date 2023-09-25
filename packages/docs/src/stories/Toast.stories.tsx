import { Button, Toast, ToastProps } from "@rnatu-ignite-ui/react"
import { StoryObj, Meta } from "@storybook/react";
import { useEffect, useRef, useState } from "react"

const DemoToast = (props: ToastProps) => {
  const [isOpen, setOpen] = useState(false);
  const timeRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timeRef.current)
  }, [])

  return (
    <div>
      <Button onClick={() => {
        setOpen(false)
        window.clearTimeout(timeRef.current)
        timeRef.current = window.setTimeout(() => {
          setOpen(true)
        }, 100)
      }}>Agendar</Button>
      <Toast open={isOpen} onOpenChange={setOpen} {...props} />
    </div>
  )
}

DemoToast.displayName = "Toast";

export default {
  title: 'Form/Toast',
  component: DemoToast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro ás 16h'
  }
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}