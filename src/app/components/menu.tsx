import React from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const Menu: React.FC = () => {
    const router = useRouter();
    const { data: session } = useSession()

    const handleNavigateLogin = () => {
        router.push('/login');
    };

    const handleNavigateHome = () => {
        router.push('/');
    };

    return (
        <nav className="menu">
            <ul className="menu-list">
                <li className="menu-item">
                    <h1 onClick={handleNavigateHome} className="menu-link">Home</h1>
                </li>
                <li className="menu-item">
                {session ? (
                    <h1 onClick={() => router.push('/logout')} className="menu-link">Logout</h1>
                ) : (
                    <h1 onClick={handleNavigateLogin} className="menu-link">Login</h1>
                )}
                </li>
            </ul>

            <style jsx>{`
                .menu {
                    width: 100%;
                    background: #1f2937;
                    padding: 1rem;
                }
                .menu-list {
                    display: flex;
                    justify-content: space-around;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
                .menu-item {
                    margin: 0;
                }
                .menu-link {
                    color: white;
                    cursor: pointer;
                    font-size: 1.25rem;
                    font-weight: bold;
                    transition: color 0.2s;
                }
                .menu-link:hover {
                    color: #3b82f6;
                }
            `}</style>
        </nav>
    );
};

export default Menu;