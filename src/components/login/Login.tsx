import * as React from 'react';
import { Input } from '@/components/ui/input.tsx'; // Assuming you are using Input and Button components from shadcn
import { Button } from '@/components/ui/button.tsx'; // Assuming you are using Input and Button components from shadcn
import { Label } from '@/components/ui/label.tsx'; // Assuming you are using Input and Button components from shadcn
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Add login logic here, like calling an API or handling authentication
        console.log("Login submitted");

        // After successful login, navigate to another page
        navigate('/todos');
    };

    const handleCancel = () => {
        // Navigate back to the home page or previous page
        navigate('/');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-6">Login</h2>

                {/* Username Field */}
                <div className="mb-4">
                    <Label htmlFor="username">Username</Label>
                    <Input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        className="w-full mt-1"
                    />
                </div>

                {/* Password Field */}
                <div className="mb-6">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="w-full mt-1"
                    />
                </div>

                {/* Submit Button */}
                <Button onClick={handleLogin} className="w-full">
                    Login
                </Button>

                {/* Cancel Button */}
                <Button onClick={handleCancel} variant="secondary" className="w-full mt-4">
                    Cancel
                </Button>
            </div>
        </div>
    );
};

export default Login;
