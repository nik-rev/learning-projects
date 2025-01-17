import type { Meta } from "@storybook/react";
import { Mail } from "lucide-react";
import { Group } from "react-aria-components";

import { AccessibleIcon } from "@/components/accessible-icon";
import { Button } from "@/components/button";
import {
  Description,
  FieldError,
  Input,
  Label,
  LabeledGroup,
  TextField,
} from "@/components/field";
import { Form } from "@/components/form";
import {
  InputAddon,
  InputGroup,
  InputGroups,
  InputSeparator,
} from "@/components/input-group";
import { NativeSelect, NativeSelectField } from "@/components/native-select";
import {
  Select,
  SelectButton,
  SelectListBox,
  SelectListItem,
  SelectListItemLabel,
  SelectPopover,
} from "@/components/select";

import { docs } from "../.storybook/docs";
import { Canada, US } from "./~icons";

const meta: Meta<typeof TextField> = {
  title: "Components/Text Field (Input)",
  component: TextField,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/TextField.html#textfield" target="_blank">`text field`</a> allows a user to enter a plain text value with a keyboard.',
      },
      ...docs,
      controls: {
        exclude: /.*/gv,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

export function BasicExample() {
  return (
    <TextField className="w-full sm:w-80" name="email" type="email">
      <Label>Email address</Label>
      <Input />
    </TextField>
  );
}

export function WithDescription() {
  return (
    <TextField name="email" type="email">
      <Label>Email address</Label>
      <Description>
        Enter an email for us to contact you about your order.
      </Description>
      <Input />
    </TextField>
  );
}

export function WithFollowingDescription() {
  return (
    <TextField name="email" type="email">
      <Label>Email address</Label>

      <Input />
      <Description>
        Enter an email for us to contact you about your order.
      </Description>
    </TextField>
  );
}

export function WithDisabled() {
  return (
    <TextField name="email" type="email" isDisabled>
      <Label>Email address</Label>
      <Description>
        Enter an email for us to contact you about your order.
      </Description>
      <Input placeholder="you@example.com" />
    </TextField>
  );
}

export function WithReadonly() {
  return (
    <TextField name="email" type="email" isReadOnly>
      <Label>Email address</Label>
      <Description>
        Enter an email for us to contact you about your order.
      </Description>
      <Input placeholder="you@example.com" />
    </TextField>
  );
}

export function WithValidation() {
  return (
    <Form>
      <TextField isRequired>
        <Label>Email address</Label>
        <Description>
          Enter an email for us to contact you about your order.
        </Description>
        <Input />
        <FieldError />
      </TextField>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export function InputGroupWithSingleInput() {
  return (
    <div className="min-w-64 space-y-6">
      <TextField name="email" type="email">
        <Label>Email address</Label>
        <InputGroup role="presentation" inline>
          <InputAddon className="text-xl text-muted sm:text-lg">
            &#x2709;
          </InputAddon>
          <Input />
        </InputGroup>
      </TextField>

      <TextField name="credit_card">
        <Label>Card number</Label>
        <InputGroup role="presentation" inline>
          <Input />
          <InputAddon className="text-xl sm:text-lg">&#x1F4B3;</InputAddon>
        </InputGroup>
        <Description>
          Enter your credit card here. You can cancel anytime you want.
        </Description>
      </TextField>

      <TextField>
        <Label>Price</Label>
        <InputGroup role="presentation">
          <InputAddon>$</InputAddon>
          <Input />
        </InputGroup>
      </TextField>

      <TextField>
        <Label>Price</Label>
        <InputGroup role="presentation">
          <Input />
          <InputAddon>.00</InputAddon>
        </InputGroup>
      </TextField>

      <TextField>
        <Label>Price</Label>
        <InputGroup role="presentation">
          <InputAddon>$</InputAddon>
          <Input />
          <InputAddon>.00</InputAddon>
        </InputGroup>
      </TextField>

      <TextField>
        <Label>Price</Label>
        <InputGroup role="presentation" inline>
          <InputAddon>$</InputAddon>
          <Input className="pe-12 ps-6" />
          <InputAddon>USD</InputAddon>
        </InputGroup>
      </TextField>

      <TextField>
        <Label>Website</Label>
        <InputGroup role="presentation">
          <InputAddon>https://</InputAddon>
          <Input />
        </InputGroup>
      </TextField>

      <TextField>
        <Label>Website</Label>
        <InputGroup role="presentation">
          <InputAddon>https://</InputAddon>
          <Input />
          <InputAddon>.com</InputAddon>
        </InputGroup>
      </TextField>

      <TextField>
        <Label>Website</Label>
        <InputGroup role="presentation" inline>
          <InputAddon>https://</InputAddon>
          <Input className="pe-14 ps-16 sm:ps-14" />
          <InputAddon>.com</InputAddon>
        </InputGroup>
      </TextField>
    </div>
  );
}

export function InputGroupWithMultiInputs() {
  return (
    <div className="space-y-6">
      <LabeledGroup>
        <Label>Phone Number</Label>
        <InputGroup>
          <TextField>
            <Label>phone number</Label>
            <Input placeholder="+1 (123) 457-7890" />
          </TextField>
          <InputSeparator />
          <NativeSelectField>
            <Label>Country</Label>
            <NativeSelect name="country">
              <option value="US">US</option>
              <option value="CA">CA</option>
              <option value="EU">EU</option>
            </NativeSelect>
          </NativeSelectField>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Phone Number inline</Label>
        <InputGroup inline>
          <TextField>
            <Label>phone number</Label>
            <Input placeholder="+1 (123) 457-7890" />
          </TextField>
          <InputSeparator />
          <NativeSelectField>
            <Label>Country</Label>
            <NativeSelect name="country">
              <option value="US">US</option>
              <option value="CA">CA</option>
              <option value="EU">EU</option>
            </NativeSelect>
          </NativeSelectField>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Phone Number</Label>
        <InputGroup>
          <NativeSelectField>
            <Label>Country</Label>
            <NativeSelect name="country">
              <option value="US">US</option>
              <option value="CA">CA</option>
              <option value="EU">EU</option>
            </NativeSelect>
          </NativeSelectField>
          <InputSeparator />
          <TextField>
            <Label>phone number</Label>
            <Input placeholder="+1 (123) 457-7890" />
          </TextField>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Phone Number inline</Label>
        <InputGroup inline>
          <NativeSelectField>
            <Label>Country</Label>
            <NativeSelect name="country">
              <option value="US">US</option>
              <option value="CA">CA</option>
              <option value="EU">EU</option>
            </NativeSelect>
          </NativeSelectField>
          <InputSeparator />
          <TextField>
            <Label>phone number</Label>
            <Input placeholder="+1 (123) 457-7890" />
          </TextField>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Phone Number</Label>
        <InputGroup>
          <Select defaultSelectedKey="ca">
            <Label>Country</Label>
            <SelectButton />

            <SelectPopover placement="bottom start" className="w-36">
              <SelectListBox>
                <SelectListItem id="ca" textValue="Canada">
                  <AccessibleIcon>
                    <Canada />
                  </AccessibleIcon>
                  <SelectListItemLabel>CA</SelectListItemLabel>
                </SelectListItem>
                <SelectListItem id="us" textValue="United States">
                  <AccessibleIcon>
                    <US />
                  </AccessibleIcon>
                  <SelectListItemLabel>US</SelectListItemLabel>
                </SelectListItem>
              </SelectListBox>
            </SelectPopover>
          </Select>
          <InputSeparator />
          <TextField>
            <Label>Phone number</Label>
            <Input placeholder="+1 (123) 457-7890" />
          </TextField>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Phone Number inline</Label>
        <InputGroup inline>
          <Select defaultSelectedKey="ca">
            <Label>Country</Label>
            <SelectButton />

            <SelectPopover placement="bottom start" className="w-36">
              <SelectListBox>
                <SelectListItem id="ca" textValue="Canada">
                  <AccessibleIcon>
                    <Canada />
                  </AccessibleIcon>
                  <SelectListItemLabel>CA</SelectListItemLabel>
                </SelectListItem>
                <SelectListItem id="us" textValue="United States">
                  <AccessibleIcon>
                    <US />
                  </AccessibleIcon>
                  <SelectListItemLabel>US</SelectListItemLabel>
                </SelectListItem>
              </SelectListBox>
            </SelectPopover>
          </Select>
          <InputSeparator />
          <TextField>
            <Label>Phone number</Label>
            <Input placeholder="+1 (123) 457-7890" />
          </TextField>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Phone Number</Label>
        <InputGroup>
          <TextField>
            <Label>Phone number</Label>
            <Input placeholder="+1 (123) 457-7890" />
          </TextField>
          <InputSeparator />
          <Select defaultSelectedKey="ca">
            <Label>Country</Label>
            <SelectButton />

            <SelectPopover placement="bottom end" className="w-36">
              <SelectListBox>
                <SelectListItem id="ca" textValue="Canada">
                  <AccessibleIcon>
                    <Canada />
                  </AccessibleIcon>
                  <SelectListItemLabel>CA</SelectListItemLabel>
                </SelectListItem>
                <SelectListItem id="us" textValue="United States">
                  <AccessibleIcon>
                    <US />
                  </AccessibleIcon>
                  <SelectListItemLabel>US</SelectListItemLabel>
                </SelectListItem>
              </SelectListBox>
            </SelectPopover>
          </Select>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Phone Number inline</Label>
        <InputGroup inline>
          <TextField>
            <Label>Phone number</Label>
            <Input placeholder="+1 (123) 457-7890" />
          </TextField>
          <InputSeparator />
          <Select defaultSelectedKey="ca">
            <Label>Country</Label>
            <SelectButton />

            <SelectPopover placement="bottom end" className="w-36">
              <SelectListBox>
                <SelectListItem id="ca" textValue="Canada">
                  <AccessibleIcon>
                    <Canada />
                  </AccessibleIcon>
                  <SelectListItemLabel>CA</SelectListItemLabel>
                </SelectListItem>
                <SelectListItem id="us" textValue="United States">
                  <AccessibleIcon>
                    <US />
                  </AccessibleIcon>
                  <SelectListItemLabel>US</SelectListItemLabel>
                </SelectListItem>
              </SelectListBox>
            </SelectPopover>
          </Select>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Price</Label>
        <InputGroup>
          <InputAddon>$</InputAddon>
          <InputSeparator />
          <TextField>
            <Label>Price</Label>
            <Input placeholder="0.00" />
          </TextField>
          <InputSeparator />
          <NativeSelectField>
            <Label>Currency</Label>
            <NativeSelect name="currency">
              <option value="CA">CA</option>
              <option value="USD">USD</option>
            </NativeSelect>
          </NativeSelectField>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Price inline</Label>
        <InputGroup inline>
          <InputAddon>$</InputAddon>
          <InputSeparator />
          <TextField>
            <Label>Price</Label>
            <Input placeholder="0.00" />
          </TextField>
          <InputSeparator />
          <Select defaultSelectedKey="CA">
            <Label>Currency</Label>
            <SelectButton />
            <SelectPopover placement="bottom end" className="w-36">
              <SelectListBox>
                <SelectListItem id="CA" textValue="CA">
                  <SelectListItemLabel>CA</SelectListItemLabel>
                </SelectListItem>
                <SelectListItem id="USD" textValue="USD">
                  <SelectListItemLabel>USD</SelectListItemLabel>
                </SelectListItem>
              </SelectListBox>
            </SelectPopover>
          </Select>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Add members</Label>
        <InputGroup>
          <TextField className="min-w-64">
            <Label>Email</Label>
            <Input type="email" />
          </TextField>
          <InputSeparator />
          <Button>Send</Button>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Add members</Label>
        <InputGroup inline>
          <TextField className="min-w-64">
            <Label>Email</Label>
            <Input type="email" />
          </TextField>
          <InputSeparator />

          <InputAddon className="pe-1">
            <Button size="sm">Send</Button>
          </InputAddon>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Add members</Label>
        <InputGroup>
          <TextField>
            <Label>Email</Label>
            <InputGroup inline role="presentation">
              <InputAddon>
                <AccessibleIcon>
                  <Mail />
                </AccessibleIcon>
              </InputAddon>
              <Input type="email" />
            </InputGroup>
          </TextField>
          <InputSeparator />
          <Button>Send</Button>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Add members</Label>
        <InputGroup>
          <TextField className="min-w-64">
            <Label>Email</Label>
            <Input type="email" />
          </TextField>
          <InputSeparator />
          <Button variant="outline">Send</Button>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Add members</Label>
        <InputGroup inline>
          <TextField>
            <Label>Email</Label>

            <InputGroup inline role="presentation">
              <InputAddon>
                <AccessibleIcon>
                  <Mail />
                </AccessibleIcon>
              </InputAddon>
              <Input type="email" />
            </InputGroup>
          </TextField>
          <InputSeparator />
          <Select defaultSelectedKey="member">
            <Label>Role</Label>
            <SelectButton className="w-32" />
            <SelectPopover placement="bottom end" className="w-36">
              <SelectListBox>
                <SelectListItem id="admin" textValue="Admin">
                  <SelectListItemLabel>Admin</SelectListItemLabel>
                </SelectListItem>
                <SelectListItem id="member" textValue="Member">
                  <SelectListItemLabel>Member</SelectListItemLabel>
                </SelectListItem>
              </SelectListBox>
            </SelectPopover>
          </Select>

          <InputSeparator />
          <Button variant="outline">Send</Button>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Add members inline</Label>
        <InputGroup inline>
          <TextField>
            <Label>Email</Label>

            <InputGroup inline role="presentation">
              <InputAddon>
                <AccessibleIcon>
                  <Mail />
                </AccessibleIcon>
              </InputAddon>
              <Input type="email" className="shadow-none" />
            </InputGroup>
          </TextField>
          <InputSeparator />

          <Select defaultSelectedKey="member">
            <Label>Role</Label>
            <SelectButton className="w-32 shadow-none" />
            <SelectPopover placement="bottom end">
              <SelectListBox>
                <SelectListItem id="admin" textValue="Admin">
                  <SelectListItemLabel>Admin</SelectListItemLabel>
                </SelectListItem>
                <SelectListItem id="member" textValue="Member">
                  <SelectListItemLabel>Member</SelectListItemLabel>
                </SelectListItem>
              </SelectListBox>
            </SelectPopover>
          </Select>

          <InputSeparator />

          <InputAddon className="pe-1">
            <Button size="sm">Send</Button>
          </InputAddon>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Add members</Label>
        <InputGroup>
          <Select defaultSelectedKey="member">
            <Label>Role</Label>
            <SelectButton />
            <SelectPopover placement="bottom end" className="w-36">
              <SelectListBox>
                <SelectListItem id="admin" textValue="Admin">
                  <SelectListItemLabel>Admin</SelectListItemLabel>
                </SelectListItem>
                <SelectListItem id="member" textValue="Member">
                  <SelectListItemLabel>Member</SelectListItemLabel>
                </SelectListItem>
              </SelectListBox>
            </SelectPopover>
          </Select>
          <InputSeparator />

          <TextField>
            <Label>Email</Label>
            <Input type="email" />
          </TextField>

          <InputSeparator />
          <Button variant="outline">Send</Button>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Add members inline</Label>
        <InputGroup inline>
          <Select defaultSelectedKey="member">
            <Label>Role</Label>
            <SelectButton />
            <SelectPopover placement="bottom end" className="w-36">
              <SelectListBox>
                <SelectListItem id="admin" textValue="Admin">
                  <SelectListItemLabel>Admin</SelectListItemLabel>
                </SelectListItem>
                <SelectListItem id="member" textValue="Member">
                  <SelectListItemLabel>Member</SelectListItemLabel>
                </SelectListItem>
              </SelectListBox>
            </SelectPopover>
          </Select>
          <InputSeparator />

          <TextField>
            <Label>Email</Label>
            <Input type="email" />
          </TextField>

          <InputSeparator />
          <Button variant="outline">Send</Button>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Add members</Label>
        <InputGroup>
          <TextField>
            <Label>Email</Label>
            <Input type="email" />
          </TextField>
          <InputSeparator />
          <NativeSelectField>
            <Label>Role</Label>
            <NativeSelect name="role">
              <option value="members">Members</option>
              <option value="admin">Admin</option>
            </NativeSelect>
          </NativeSelectField>

          <InputSeparator />
          <Button>Send</Button>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Add members inline</Label>
        <InputGroup inline>
          <TextField>
            <Label>Email</Label>
            <Input type="email" />
          </TextField>
          <InputSeparator />
          <NativeSelectField>
            <Label>Role</Label>
            <NativeSelect name="role">
              <option value="members">Members</option>
              <option value="admin">Admin</option>
            </NativeSelect>
          </NativeSelectField>

          <InputSeparator />
          <Button>Send</Button>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Add members</Label>
        <InputGroup>
          <NativeSelectField>
            <Label>Role</Label>
            <NativeSelect name="role">
              <option value="members">Members</option>
              <option value="admin">Admin</option>
            </NativeSelect>
          </NativeSelectField>

          <InputSeparator />
          <TextField>
            <Label>Email</Label>
            <Input type="email" />
          </TextField>
          <InputSeparator />
          <Button>Send</Button>
        </InputGroup>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Add members inline</Label>
        <InputGroup inline>
          <NativeSelectField>
            <Label>Role</Label>
            <NativeSelect name="role">
              <option value="members">Members</option>
              <option value="admin">Admin</option>
            </NativeSelect>
          </NativeSelectField>

          <InputSeparator />
          <TextField>
            <Label>Email</Label>
            <Input type="email" />
          </TextField>
          <InputSeparator />
          <Button>Send</Button>
        </InputGroup>
      </LabeledGroup>

      <Group>
        <InputGroup inline>
          <TextField className="min-w-64">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Email Address"
              className="py-3 sm:py-2.5"
            />
          </TextField>
          <InputSeparator />

          <InputAddon className="pe-0.5 sm:pe-1">
            <Button>Join Waitlist</Button>
          </InputAddon>
        </InputGroup>
      </Group>
    </div>
  );
}

export function WithOptionalCornerHint() {
  return (
    <TextField className="min-w-64">
      <Label className="flex justify-between">
        Email
        <span className="text-muted">Optional</span>
      </Label>
      <Input placeholder="you@example.com" type="email" name="email" />
    </TextField>
  );
}

export function WithRequiredHint() {
  return (
    <TextField className="min-w-64">
      <Label requiredHint>Email</Label>
      <Input placeholder="you@example.com" type="email" name="email" />
    </TextField>
  );
}

export function WithMultiInputs() {
  return (
    <div className="space-y-4">
      <LabeledGroup>
        <Label>Serial number</Label>
        <InputGroups>
          <Input
            name="first_3_digit"
            aria-label="First 3 digits"
            size={3}
            maxLength={3}
            placeholder="000"
          />
          <span>&ndash;</span>
          <Input
            name="middle_2_digit"
            aria-label="Middle 2 digits"
            size={2}
            maxLength={2}
            placeholder="00"
          />
          <span>&ndash;</span>
          <Input
            name="last_4_digit"
            aria-label="Last 4 digits"
            size={4}
            maxLength={4}
            placeholder="0000"
          />
        </InputGroups>
      </LabeledGroup>

      <LabeledGroup>
        <Label>Expiration date</Label>
        <InputGroups>
          <Input size={2} aria-label="Month" placeholder="mm" maxLength={2} />
          <span>/</span>
          <Input size={4} aria-label="Year" maxLength={4} placeholder="yyyy" />
        </InputGroups>
      </LabeledGroup>
    </div>
  );
}
