export interface StatItemProps {
    label: string;
    value: string;
  }
  
  export interface ProfileCardProps {
    name: string;
    title: string;
    imageUrl: string;
    stats: StatItemProps[];
    about: string;
  }
  
  export interface CollectionGridProps {
    images: string[];
  }