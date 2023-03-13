export default function SidebarMenu(props: SidebarMenuProps) {
  return <nav {...props} />;
}

export type SidebarMenuProps = React.ComponentPropsWithoutRef<"nav">;
