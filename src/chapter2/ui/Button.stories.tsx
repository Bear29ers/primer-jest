import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { screen, userEvent } from '@storybook/testing-library'; // @storybook/testing-libraryを追加
import { Button } from './Button';

export default { component: Button } as ComponentMeta<typeof Button>; // コンポーネントを指定
export const Primary: ComponentStoryObj<typeof Button> = {}; // パラメータを設定
export const Secondary: ComponentStoryObj<typeof Button> = { args: { primary: false } }; // primaryフラグにfalseを設定

// ボタンをクリックするストーリー
export const ClickButton: ComponentStoryObj<typeof Button> = {
  play: () => {
    const button = screen.getByRole('button');
    userEvent.click(button);
  },
};
