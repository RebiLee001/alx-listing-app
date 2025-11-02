export interface CardProps {
  title: string;
  description?: string;
  image?: string;
  onClick?: () => void;
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}