import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { ComponentProps, ReactNode } from 'react';

export interface TooltipProps extends ComponentProps<typeof TooltipPrimitive.Root> {
  content: string | ReactNode;
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...props}>
        <TooltipPrimitive.Trigger asChild>
        {children}
        </TooltipPrimitive.Trigger>
        
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content>
            <TooltipPrimitive.Arrow />

            {content}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

