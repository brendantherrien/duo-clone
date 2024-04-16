import { Button } from '../../components/ui/button';

const ButtonsPage = () => {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button>Primary</Button>
      <Button variant="primary">Primary outline</Button>
      <Button variant="primaryOutline">Primary outline</Button>

      <Button variant="secondary">Secondary outline</Button>
      <Button variant="secondaryOutline">Secondary outline</Button>

      <Button variant="danger">Danger outline</Button>
      <Button variant="dangerOutline">Danger outline</Button>

      <Button variant="super">super outline</Button>
      <Button variant="superOutline">super outline</Button>

      <Button variant="ghost">super outline</Button>

      <Button variant="sidebar">sidebar outline</Button>
      <Button variant="sidebarOutline">sidebar outline</Button>
    </div>
  );
};

export default ButtonsPage;
