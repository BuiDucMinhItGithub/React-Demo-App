import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();


export function AppProviders({ children }: {children: React.ReactNode}) {
    return (
        <Provider store={store}>
            <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
            </BrowserRouter>
        </Provider>
    )
}