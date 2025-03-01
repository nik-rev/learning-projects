import type { Meta } from "@storybook/react";
import React from "react";
import { type Key } from "react-aria-components";

import { AccessibleIcon } from "@/components/accessible-icon";
import { Avatar } from "@/components/avatar";
import { Button } from "@/components/button";
import { Description, FieldError, Label } from "@/components/field";
import { Form } from "@/components/form";
import {
  Select,
  SelectButton,
  SelectListBox,
  SelectListItem,
  SelectListItemDescription,
  SelectListItemLabel,
  SelectPopover,
  SelectSection,
} from "@/components/select";
import { Text } from "@/components/text";

import { docs } from "../.storybook/docs";
import { Canada, Justified, Left, Mexico, Right, US } from "./~icons";
import { users } from "./users";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Select.html#select" target="_blank">`select`</a> displays a collapsible list of options and allows a user to select one of them.',
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
    <Select placeholder="Select status&hellip;">
      <Label>Project status</Label>
      <SelectButton />
      <SelectPopover>
        <SelectListBox>
          <SelectListItem id="1">Backlog</SelectListItem>
          <SelectListItem id="2">In Progress</SelectListItem>
          <SelectListItem id="3">In Review</SelectListItem>
          <SelectListItem id="4">Done</SelectListItem>
          <SelectListItem id="5">Won't do</SelectListItem>
        </SelectListBox>
      </SelectPopover>
      <FieldError />
    </Select>
  );
}

export function WithDescription() {
  return (
    <Select placeholder="Select status&hellip;">
      <Label>Project status</Label>
      <Description>
        This will be visible to clients involved in the project.
      </Description>
      <SelectButton />
      <SelectPopover>
        <SelectListBox>
          <SelectListItem id="1">Backlog</SelectListItem>
          <SelectListItem id="2">In Progress</SelectListItem>
          <SelectListItem id="3">In Review</SelectListItem>
          <SelectListItem id="4">Done</SelectListItem>
          <SelectListItem id="5">Won't do</SelectListItem>
        </SelectListBox>
      </SelectPopover>
    </Select>
  );
}

export function WithFollowingDescription() {
  return (
    <Select placeholder="Select status&hellip;">
      <Label>Project status</Label>
      <SelectButton />
      <SelectPopover>
        <SelectListBox>
          <SelectListItem id="1">Backlog</SelectListItem>
          <SelectListItem id="2">In Progress</SelectListItem>
          <SelectListItem id="3">In Review</SelectListItem>
          <SelectListItem id="4">Done</SelectListItem>
          <SelectListItem id="5">Won't do</SelectListItem>
        </SelectListBox>
      </SelectPopover>
      <Description>
        This will be visible to clients involved in the project.
      </Description>
    </Select>
  );
}

export function WithSelectItemDescription() {
  return (
    <Select placeholder="Select status&hellip;">
      <Label>Project status</Label>
      <SelectButton />
      <SelectPopover>
        <SelectListBox>
          <SelectListItem id="1" textValue="Backlog">
            <SelectListItemLabel>Backlog</SelectListItemLabel>
            <SelectListItemDescription className="block w-full">
              A backlog is a list of tasks waiting to be prioritized and
              completed.
            </SelectListItemDescription>
          </SelectListItem>
          <SelectListItem id="2">
            <SelectListItemLabel>In Progress</SelectListItemLabel>
          </SelectListItem>
          <SelectListItem id="3">
            <SelectListItemLabel>In Review</SelectListItemLabel>
          </SelectListItem>
          <SelectListItem id="4">
            <SelectListItemLabel>Done</SelectListItemLabel>
          </SelectListItem>
          <SelectListItem id="5">
            <SelectListItemLabel>Won't do</SelectListItemLabel>
          </SelectListItem>
        </SelectListBox>
      </SelectPopover>
      <Description>
        This will be visible to clients involved in the project.
      </Description>
    </Select>
  );
}

export function WithSections() {
  return (
    <Select>
      <Label>Preferred fruit or vegetable</Label>
      <SelectButton />

      <SelectPopover>
        <SelectListBox>
          <SelectSection title="Fruit">
            <SelectListItem id="Apple">
              <SelectListItemLabel>Apple</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="Banana">
              <SelectListItemLabel>Banana</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="Orange">
              <SelectListItemLabel>Orange</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="Honeydew">
              <SelectListItemLabel>Honeydew</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="Grapes">
              <SelectListItemLabel>Grapes</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="Watermelon">
              <SelectListItemLabel>Watermelon</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="Cantaloupe">
              <SelectListItemLabel>Cantaloupe</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="Pear">
              <SelectListItemLabel>Pear</SelectListItemLabel>
            </SelectListItem>
          </SelectSection>
          <SelectSection title="Vegetable">
            <SelectListItem id="Cabbage">
              <SelectListItemLabel>Cabbage</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="Broccoli">
              <SelectListItemLabel>Broccoli</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="Carrots">
              <SelectListItemLabel>Carrots</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="Lettuce">
              <SelectListItemLabel>Lettuce</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="Spinach">
              <SelectListItemLabel>Spinach</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="Bok Choy">
              <SelectListItemLabel>Bok Choy</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="Cauliflower">
              <SelectListItemLabel>Cauliflower</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="Potatoes">
              <SelectListItemLabel>Potatoes</SelectListItemLabel>
            </SelectListItem>
          </SelectSection>
        </SelectListBox>
      </SelectPopover>
    </Select>
  );
}

export function WithDisabledSelectItem() {
  const [statusId, setStatusId] = React.useState<Key>("2");

  return (
    <Select
      placeholder="Select status&hellip;"
      selectedKey={statusId}
      onSelectionChange={setStatusId}
      disabledKeys={["5"]}
    >
      <Label>Project status</Label>
      <Description>
        This will be visible to clients involved in the project.
      </Description>
      <SelectButton />
      <SelectPopover>
        <SelectListBox>
          <SelectListItem id="1">Backlog</SelectListItem>
          <SelectListItem id="2">In Progress</SelectListItem>
          <SelectListItem id="3">In Review</SelectListItem>
          <SelectListItem id="4">Done</SelectListItem>
          <SelectListItem id="5">Won't do</SelectListItem>
        </SelectListBox>
      </SelectPopover>
    </Select>
  );
}

export function WithDisabledSelect() {
  return (
    <Select placeholder="Select status&hellip;" isDisabled>
      <Label>Project status</Label>
      <Description>
        This will be visible to clients involved in the project.
      </Description>
      <SelectButton />
      <SelectPopover>
        <SelectListBox>
          <SelectListItem id="1">Backlog</SelectListItem>
          <SelectListItem id="2">In Progress</SelectListItem>
          <SelectListItem id="3">In Review</SelectListItem>
          <SelectListItem id="4">Done</SelectListItem>
          <SelectListItem id="5">Won't do</SelectListItem>
        </SelectListBox>
      </SelectPopover>
    </Select>
  );
}

export function WithControlledSelect() {
  const [statusId, setStatusId] = React.useState<Key>("3");

  return (
    <Select
      placeholder="Select status&hellip;"
      selectedKey={statusId}
      onSelectionChange={setStatusId}
    >
      <Label>Project status</Label>
      <Description>
        This will be visible to clients involved in the project.
      </Description>
      <SelectButton />

      <SelectPopover>
        <SelectListBox>
          <SelectListItem id="1">Backlog</SelectListItem>
          <SelectListItem id="2">In Progress</SelectListItem>
          <SelectListItem id="3">In Review</SelectListItem>
          <SelectListItem id="4">Done</SelectListItem>
          <SelectListItem id="5">Won't do</SelectListItem>
        </SelectListBox>
      </SelectPopover>
    </Select>
  );
}

export function WithIcon() {
  return (
    <Select placeholder="Select status&hellip;">
      <Label>Project status</Label>
      <Description>
        This will be visible to clients involved in the project.
      </Description>
      <SelectButton />
      <SelectPopover>
        <SelectListBox>
          <SelectListItem id="1" textValue="Backlog">
            <StatusIcon className="bg-gray-500" />
            <SelectListItemLabel>Backlog</SelectListItemLabel>
          </SelectListItem>
          <SelectListItem id="2" textValue="In Progress">
            <StatusIcon className="bg-blue-500" />
            <SelectListItemLabel>In Progress</SelectListItemLabel>
          </SelectListItem>
          <SelectListItem id="3" textValue="In Review">
            <StatusIcon className="bg-yellow-500" />
            <SelectListItemLabel>In Review</SelectListItemLabel>
          </SelectListItem>
          <SelectListItem id="4" textValue="Done">
            <StatusIcon className="bg-green-500" />
            <SelectListItemLabel>Done</SelectListItemLabel>
          </SelectListItem>
          <SelectListItem id="5" textValue="Won't do">
            <StatusIcon className="bg-red-500" />
            <SelectListItemLabel>Won't do</SelectListItemLabel>
          </SelectListItem>
        </SelectListBox>
      </SelectPopover>
    </Select>
  );
}

export function WithIconExampleTwoHiddenTitle() {
  return (
    <Select placeholder="Choose alignment" defaultSelectedKey="left">
      <Label>Alignment</Label>
      <SelectButton />
      <SelectPopover>
        <SelectListBox>
          <SelectListItem id="left" textValue="Left">
            <AccessibleIcon>
              <Left />
            </AccessibleIcon>
            <SelectListItemLabel>Left</SelectListItemLabel>
          </SelectListItem>
          <SelectListItem id="right" textValue="Right">
            <AccessibleIcon>
              <Right />
            </AccessibleIcon>
            <SelectListItemLabel>Right</SelectListItemLabel>
          </SelectListItem>
          <SelectListItem id="justified" textValue="Justified">
            <AccessibleIcon>
              <Justified />
            </AccessibleIcon>
            <SelectListItemLabel>Justified</SelectListItemLabel>
          </SelectListItem>
        </SelectListBox>
      </SelectPopover>
    </Select>
  );
}

export function WithIconAndDescription() {
  return (
    <Select placeholder="Select status&hellip;">
      <Label>Project status</Label>
      <SelectButton />
      <SelectPopover>
        <SelectListBox>
          <SelectListItem id="1" textValue="Backlog">
            <StatusIcon className="bg-gray-500" />
            <SelectListItemLabel>Backlog</SelectListItemLabel>
            <SelectListItemDescription className="block w-full">
              A backlog is a list of tasks waiting to be prioritized and
              completed.
            </SelectListItemDescription>
          </SelectListItem>
          <SelectListItem id="2">
            <SelectListItemLabel>In Progress</SelectListItemLabel>
          </SelectListItem>
          <SelectListItem id="3">
            <SelectListItemLabel>In Review</SelectListItemLabel>
          </SelectListItem>
          <SelectListItem id="4">
            <SelectListItemLabel>Done</SelectListItemLabel>
          </SelectListItem>
          <SelectListItem id="5">
            <SelectListItemLabel>Won't do</SelectListItemLabel>
          </SelectListItem>
        </SelectListBox>
      </SelectPopover>
      <Description>
        This will be visible to clients involved in the project.
      </Description>
    </Select>
  );
}

export function WithAvatars() {
  return (
    <Select placeholder="Assign to" defaultSelectedKey="1">
      <Label>Assignee</Label>
      <SelectButton />
      <SelectPopover>
        <SelectListBox items={users}>
          {(user) => (
            <SelectListItem textValue={user.name}>
              <Avatar
                className="rounded-full"
                src={user.avatar}
                alt={user.name}
              />
              <SelectListItemLabel>{user.name}</SelectListItemLabel>
            </SelectListItem>
          )}
        </SelectListBox>
      </SelectPopover>
    </Select>
  );
}

export function WithAvatarItemDescriptionHiddenTitle() {
  return (
    <Select
      placeholder="Assign to"
      defaultSelectedKey="1"
      // className="w-full sm:min-w-72"
    >
      <Label>Assignee</Label>
      <SelectButton />
      <SelectPopover>
        <SelectListBox items={users}>
          {(user) => (
            <SelectListItem textValue={user.name}>
              <Avatar
                className="rounded-full"
                src={user.avatar}
                alt={user.name}
              />

              <SelectListItemLabel className="">
                {user.name}
              </SelectListItemLabel>
              <SelectListItemDescription>
                {user.description}
              </SelectListItemDescription>
            </SelectListItem>
          )}
        </SelectListBox>
      </SelectPopover>
    </Select>
  );
}

export function WithFlags() {
  return (
    <Select defaultSelectedKey="ca">
      <Label>Country</Label>
      <SelectButton />
      <SelectPopover>
        <SelectListBox>
          <SelectListItem id="ca" textValue="Canada">
            <AccessibleIcon>
              <Canada />
            </AccessibleIcon>
            <SelectListItemLabel>Canada</SelectListItemLabel>
          </SelectListItem>
          <SelectListItem id="us" textValue="United States">
            <AccessibleIcon>
              <US />
            </AccessibleIcon>
            <SelectListItemLabel>United States</SelectListItemLabel>
          </SelectListItem>
          <SelectListItem id="mexican" textValue="Mexico">
            <AccessibleIcon>
              <Mexico />
            </AccessibleIcon>
            <SelectListItemLabel>Mexico</SelectListItemLabel>
          </SelectListItem>
        </SelectListBox>
      </SelectPopover>
    </Select>
  );
}

export function WithSecondaryText() {
  return (
    <Select
      placeholder="Assign to"
      defaultSelectedKey="1"
      className="w-full sm:min-w-72"
    >
      <Label>Assignee</Label>
      <SelectButton />
      <SelectPopover>
        <SelectListBox items={users}>
          {(user) => (
            <SelectListItem textValue={user.name}>
              <SelectListItemLabel>
                {user.name}
                <Text className="inline ps-1.5">{user.description}</Text>
              </SelectListItemLabel>
            </SelectListItem>
          )}
        </SelectListBox>
      </SelectPopover>
    </Select>
  );
}
export function Validation() {
  return (
    <Form>
      <Select isRequired placeholder="Select status&hellip;">
        <Label>Project status</Label>
        <Description>
          This will be visible to clients involved in the project.
        </Description>
        <SelectButton />
        <SelectPopover>
          <SelectListBox>
            <SelectListItem id="1" textValue="Backlog">
              <StatusIcon className="bg-gray-500" />
              <SelectListItemLabel>Backlog</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="2" textValue="In Progress">
              <StatusIcon className="bg-blue-500" />
              <SelectListItemLabel>In Progress</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="3" textValue="In Review">
              <StatusIcon className="bg-yellow-500" />
              <SelectListItemLabel>In Review</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="4" textValue="Done">
              <StatusIcon className="bg-green-500" />
              <SelectListItemLabel>Done</SelectListItemLabel>
            </SelectListItem>
            <SelectListItem id="5" textValue="Won't do">
              <StatusIcon className="bg-red-500" />
              <SelectListItemLabel>Won't do</SelectListItemLabel>
            </SelectListItem>
          </SelectListBox>
        </SelectPopover>
        <FieldError />
      </Select>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export function CustomWidth() {
  return (
    <Select className="min-w-96" isRequired placeholder="Select status&hellip;">
      <Label>Project status</Label>
      <Description>
        This will be visible to clients involved in the project.
      </Description>
      <SelectButton />
      <SelectPopover>
        <SelectListBox>
          <SelectListItem id="1" textValue="Backlog">
            <StatusIcon className="bg-gray-500" />
            <SelectListItemLabel>Backlog</SelectListItemLabel>
          </SelectListItem>
          <SelectListItem id="2" textValue="In Progress">
            <StatusIcon className="bg-blue-500" />
            <SelectListItemLabel>In Progress</SelectListItemLabel>
          </SelectListItem>
          <SelectListItem id="3" textValue="In Review">
            <StatusIcon className="bg-yellow-500" />
            <SelectListItemLabel>In Review</SelectListItemLabel>
          </SelectListItem>
          <SelectListItem id="4" textValue="Done">
            <StatusIcon className="bg-green-500" />
            <SelectListItemLabel>Done</SelectListItemLabel>
          </SelectListItem>
          <SelectListItem id="5" textValue="Won't do">
            <StatusIcon className="bg-red-500" />
            <SelectListItemLabel>Won't do</SelectListItemLabel>
          </SelectListItem>
        </SelectListBox>
      </SelectPopover>
      <FieldError />
    </Select>
  );
}

CustomWidth.parameters = {
  docs: {
    description: {
      story:
        'Use `className="min-w-*"`on the `SelectField` component to set select field width.',
    },
  },
};

export function CustomLayout() {
  return (
    <Form>
      <Select isRequired placeholder="Select status&hellip;" className="gap-2">
        <div className="flex items-center gap-2">
          <Label className="mb-0 self-start mt-1">Project status</Label>
          <div>
            <SelectButton className="min-w-48" />
            <FieldError className="mt-2" />
          </div>

          <SelectPopover>
            <SelectListBox>
              <SelectListItem id="1" textValue="Backlog">
                <StatusIcon className="bg-gray-500" />
                <SelectListItemLabel>Backlog</SelectListItemLabel>
              </SelectListItem>
              <SelectListItem id="2" textValue="In Progress">
                <StatusIcon className="bg-blue-500" />
                <SelectListItemLabel>In Progress</SelectListItemLabel>
              </SelectListItem>
              <SelectListItem id="3" textValue="In Review">
                <StatusIcon className="bg-yellow-500" />
                <SelectListItemLabel>In Review</SelectListItemLabel>
              </SelectListItem>
              <SelectListItem id="4" textValue="Done">
                <StatusIcon className="bg-green-500" />
                <SelectListItemLabel>Done</SelectListItemLabel>
              </SelectListItem>
              <SelectListItem id="5" textValue="Won't do">
                <StatusIcon className="bg-red-500" />
                <SelectListItemLabel>Won't do</SelectListItemLabel>
              </SelectListItem>
            </SelectListBox>
          </SelectPopover>
        </div>
      </Select>

      <Button type="submit">Submit</Button>
    </Form>
  );
}

function StatusIcon({ className }: { className: string }) {
  return (
    <span
      data-ui="icon"
      className={`size-3 rounded-full border border-solid border-white ${className}`}
    />
  );
}
