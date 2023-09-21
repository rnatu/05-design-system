import * as ToastPrimitive from '@radix-ui/react-toast';
import { X } from 'phosphor-react';
import { ComponentProps } from 'react';

export interface ToastProps extends ComponentProps<typeof ToastPrimitive.Root> {
  title: string;
  description?: string;
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastPrimitive.Provider>
      <ToastPrimitive.Root {...props}>
        <ToastPrimitive.Title>
          {title}
        </ToastPrimitive.Title>
        {description &&
          <ToastPrimitive.Description>
            {description}
          </ToastPrimitive.Description>
        }
        <ToastPrimitive.Close>
          <X weight='light' size={20}/>
        </ToastPrimitive.Close>
      </ToastPrimitive.Root>

      <ToastPrimitive.Viewport />
    </ToastPrimitive.Provider>
  )
}