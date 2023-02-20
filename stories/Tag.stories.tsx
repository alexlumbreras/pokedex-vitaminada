import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Tag } from "@/components/atoms/Tag";

export default {
	title: "Pokédex/Components/Tag",
	component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const tag = Template.bind({});
tag.args = {
	type: "grass",
	label: "Type",
};
