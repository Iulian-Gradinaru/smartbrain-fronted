import './App.css';
import { MainApp } from './components/MainApp/MainApp';
import { AuthProvider } from './hooks/useAuth';

export const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <MainApp />
      </div>
    </AuthProvider>
  );
};
