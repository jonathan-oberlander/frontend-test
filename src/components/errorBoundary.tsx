import { Component, ErrorInfo, ReactNode } from "react"

interface Props {
    children?: ReactNode
}

interface State {
    error?: Error
    errorInfo?: ErrorInfo
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        error: undefined
    }

    public static getDerivedStateFromError(error?: Error): State {
        return { error }
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("In error Boundary", error, errorInfo)
    }

    public render() {
        if (this.state.error) {
            return (
                <div>
                    <p>Sorry... there was an error</p>
                    <div>
                        <pre>{JSON.stringify(this.state.error.message)}</pre>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}
