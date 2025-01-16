import { Container } from "./styles";

export function Input({ icon: Icon, size, title, $hideonmobile, id, ...rest }) {
  return (
    <Container $hideonmobile={$hideonmobile}>
      {Icon && <Icon size={size} />}
      <input {...rest} id={id}/>
    </Container>
  );
}
