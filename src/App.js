import { Toaster } from 'react-hot-toast';
import { useQuery } from 'react-query';
import './App.css';
import SavePage from './pages/SavePage';
import UserData from './pages/UserData';

function App() {
		const {
			data: userData = [],
			refetch,
			isLoading,
		} = useQuery({
			queryKey: ["post"],
			queryFn: async () => {
				const res = fetch(`${process.env.REACT_APP_API_URL}/post`);
				const data = (await res).json();
				return data;
			},
		});
  return (
		<div className="md:w-1/2 md:mx-auto">
			<SavePage refetch={refetch} />
			<UserData refetch={refetch} isLoading={isLoading} userData={userData} />
			<Toaster />
		</div>
	);
}

export default App;
