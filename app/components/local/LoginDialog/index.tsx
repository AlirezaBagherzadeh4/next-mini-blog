'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '../../ui';
import { Button } from '../../global';
import { Input } from '../../ui/input';

export const LoginDialog = () => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="secondary">Login</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Login</DialogTitle>
          </DialogHeader>
          <div className="flex h-fit w-full flex-col items-center justify-between gap-4">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
          </div>
          <DialogFooter className="pt-4 sm:justify-end">
            <Button type="submit">Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
