export const FlexGrowExample = () => {
  return (
    <scroll-view>
      <text className="title">
        flex-direction: column
      </text>
      <view className="flex flex-row gap-2">
        <view className="item1">
          <text className="text">flex-grow: 1</text>
        </view>
        <view className="item2">
          <text className="text">flex-grow: 2</text>
        </view>
        <view className="item3">
          <text className="text">100px</text>
        </view>
      </view>
    </scroll-view>
  );
};