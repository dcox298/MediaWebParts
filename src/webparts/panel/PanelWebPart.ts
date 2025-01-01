import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'PanelWebPartStrings';
import Panel from './components/Panel';
import { IPanelProps } from './components/IPanelProps';

export interface IPanelWebPartProps {

}

export default class PanelWebPart extends BaseClientSideWebPart<IPanelWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IPanelProps> = React.createElement(
      Panel,
      {

      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
      return super.onInit()
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
               
              ]
            }
          ]
        }
      ]
    };
  }
}
