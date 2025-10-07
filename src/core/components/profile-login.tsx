import * as React from "react";
import { UserRound } from "lucide-react";
import { Button } from "@/core/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/core/components/ui/dropdown-menu";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/core/components/ui/card";
import { Label } from "@/core/components/ui/label";
import { Input } from "@/core/components/ui/input";

// Button que acepta ref para Radix
const RefButton = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  (props, ref) => <Button {...props} ref={ref} />
);

export function ProfileLogin() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <RefButton variant="outline" size="icon">
          <UserRound className="h-[1.2rem] w-[1.2rem]" />
        </RefButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="p-2 w-80 h-auto" forceMount>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>Enter your email below to login</CardDescription>
            <CardAction>
              <RefButton variant="link">Sign Up</RefButton>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <RefButton type="submit" className="w-full h-8">
              Login
            </RefButton>
            <RefButton variant="outline" className="w-full h-8">
              Login with Google
            </RefButton>
          </CardFooter>
        </Card>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
