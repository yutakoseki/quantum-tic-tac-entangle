'use client';
import { useSession } from 'next-auth/react';
import Login from './components/Login';
import Logout from './components/Logout';

export default function Home() {
    const { data: session, status } = useSession();
    console.log('session : ', session);
    console.log('status : ', status);
    return (
        <div className="bg-zinc-800">
            {status === 'authenticated' ? (
                <div>
                    <p>セッションの期限：{session.expires}</p>
                    <p>ようこそ、{session.user?.name}さん</p>
                    <img src={session.user?.image ?? ``} alt="" style={{ borderRadius: '50px' }} />
                    <div>
                        <Logout />
                    </div>
                </div>
            ) : (
                <>
                    <Login />
                </>
            )}
        </div>
    );
}
