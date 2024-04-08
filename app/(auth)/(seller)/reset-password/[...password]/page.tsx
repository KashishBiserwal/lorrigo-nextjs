import { ResetPasswordForm } from "@/components/Auth/ResetPasswordForm";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function RestPasswordPage({ searchParams }: { searchParams: { token: string } }) {
    return (
        <div className="w-full flex justify-center">
            <Card className="lg:w-2/5">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl text-center">Reset Your Password?</CardTitle>
                    {/* <CardDescription className="text-center">
                        Enter your email to reset your password
                    </CardDescription> */}
                </CardHeader>
                <CardContent>
                    <ResetPasswordForm token={searchParams.token} />
                </CardContent>
                <CardFooter className="flex flex-col">
                    <p className="mt-2 text-xs text-center text-gray-700">
                        Remember your password?
                        <Link href="/login">
                            <span className="text-blue-600"> Login</span>
                        </Link>
                    </p>
                </CardFooter>

            </Card>
        </div>

    );
}