import { APPLICATION_NAME, CURRENT_YEAR } from "@/constants";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export default function MagicLinkEmail({
  host,
  url,
}: {
  readonly host: string;
  readonly url: string;
}): Readonly<JSX.Element> {
  return (
    <Html>
      <Head />
      <Preview>You&apos;ve been invited to a group!</Preview>
      <Tailwind>
        <Body className="m-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Section className="my-[32px] text-center">
              <Text className="mb-8 text-[14px] font-medium leading-[24px] text-black">
                Your magic link login is below, click to login.
                {host}
              </Text>

              <Text className="text-[14px] font-medium leading-[24px] text-black">
                <Link
                  className="text-[#2754C5] underline"
                  target="_blank"
                  href={url}
                >
                  Login using Magic Link
                </Link>
              </Text>
            </Section>

            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />

            <Text className="flex items-center justify-center text-[12px] leading-[24px] text-[#666666]">
              © {CURRENT_YEAR} {APPLICATION_NAME}. All rights reserved.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
