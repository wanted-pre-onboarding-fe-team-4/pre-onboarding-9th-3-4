import React, { ComponentProps } from 'react';
import { Area, Bar, ComposedChart, Label } from 'recharts';
import { ChartStyleConfig } from '../../config/ChartStyleConfig';

const {
  CHART_WIDTH,
  CHART_HEIGHT,
  CHART_MARGIN,
  BAR_FILL_COLOR,
  BAR_STROKE_COLOR,
  AREA_FILL_COLOR,
  AREA_STROKE_COLOR,
} = ChartStyleConfig;

export const StyledChartBase = ({
  children,
  ...props
}: React.ComponentProps<typeof ComposedChart>) => (
  <ComposedChart
    width={CHART_WIDTH}
    height={CHART_HEIGHT}
    margin={CHART_MARGIN}
    {...props}
  >
    {children}
  </ComposedChart>
);

// @see https://github.com/recharts/recharts/issues/412
// Wrapping 컴포넌트는 렌더링이 되지 않음.
// workaround:
export class StyledChartBar extends Bar {
  static defaultProps = {
    ...Bar.defaultProps,
    fill: BAR_FILL_COLOR,
    stroke: BAR_STROKE_COLOR,
    barSize: 20,
  };
}

export class StyledChartArea extends Area {
  static defaultProps = {
    ...Area.defaultProps,
    fill: AREA_FILL_COLOR,
    stroke: AREA_STROKE_COLOR,
    fillOpacity: 0.8,
  };
}

export const BottomLeftLabel = (props: ComponentProps<typeof Label>) => (
  <Label {...props} offset={-10} position='insideBottomLeft' />
);
BottomLeftLabel.defaultProps = Label.defaultProps;
BottomLeftLabel.displayName = Label.displayName;
BottomLeftLabel.parseViewBox = Label.parseViewBox;
BottomLeftLabel.renderCallByParent = Label.renderCallByParent;

export const LeftLabel = (props: ComponentProps<typeof Label>) => (
  <Label {...props} offset={-10} angle={-90} position='insideLeft' />
);
LeftLabel.defaultProps = Label.defaultProps;
LeftLabel.displayName = Label.displayName;
LeftLabel.parseViewBox = Label.parseViewBox;
LeftLabel.renderCallByParent = Label.renderCallByParent;

export const RightLabel = (props: ComponentProps<typeof Label>) => (
  <Label {...props} offset={-10} angle={-90} position='insideRight' />
);
RightLabel.defaultProps = Label.defaultProps;
RightLabel.displayName = Label.displayName;
RightLabel.parseViewBox = Label.parseViewBox;
RightLabel.renderCallByParent = Label.renderCallByParent;
