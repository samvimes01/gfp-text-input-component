import { icons, LucideProps } from "lucide-react";

const iconKeysMap: { [index: string]: React.ComponentType<LucideProps> } = icons;

export function Icon({ name, size = 16 }: { name: string; size?: number }) {
  const LucideIcon = iconKeysMap[name];
  if (!LucideIcon) throw new Error(`Unknown icon: ${name}`);
  
  return <LucideIcon size={size} />;
}
