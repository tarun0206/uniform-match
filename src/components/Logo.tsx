
import React from 'react';
import { Shield, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
  textSize?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  className, 
  showText = true, 
  textSize = 'md' 
}) => {
  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="relative flex items-center justify-center">
        <Shield className="h-7 w-7 text-blue-700" />
        <Heart className="absolute h-3 w-3 text-rose-500" />
      </div>
      
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={cn('font-inter font-bold tracking-tight text-blue-800', textSizeClasses[textSize])}>
            Defense<span className="text-rose-600">Connect</span>
          </span>
          <span className="text-xs font-medium text-muted-foreground">
            Military Matrimony
          </span>
        </div>
      )}
    </div>
  );
};
