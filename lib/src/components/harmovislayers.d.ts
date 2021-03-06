import * as React from 'react';
import { Layer } from '@deck.gl/core';
import { ActionTypes, Viewport } from '../types';
interface Props {
    viewport: Viewport;
    mapboxApiAccessToken: string;
    mapStyle?: string;
    actions: ActionTypes;
    onViewportChange?(viewport: Viewport): void;
    layers: Layer[];
    mapGlComponents?: any;
}
export default class HarmoVisLayers extends React.Component<Props> {
    static defaultProps: {
        mapStyle: string;
        mapGlComponents: any;
    };
    componentDidMount(): void;
    initialize(gl: WebGLRenderingContext): void;
    render(): JSX.Element;
}
export {};
