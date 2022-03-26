import BackgroundDiv from './styles';

export default function Background({ backgroundUri, children}: BackgroundProps) {
    return (
        <BackgroundDiv backgroundUri={backgroundUri}>{children}</BackgroundDiv>
    );
}

type BackgroundProps = {
    backgroundUri: string;
    children: JSX.Element;
};