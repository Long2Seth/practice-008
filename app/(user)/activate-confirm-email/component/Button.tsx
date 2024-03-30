import Style from './style.module.css';

type Props = {
    title : string;
    onClick ?: () => void;
    className ?: string;
};


export default function Button({title,onClick,className}: Props) {
    return (
        <button
            className={`${Style.container} ${className}`}
            onClick={onClick}
        >
            {title}
        </button>
    );
}