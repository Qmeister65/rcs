export interface CardProps {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
}

export type CardListProps = { data: CardProps[] };
