import { Injectable } from '@angular/core';
import { AlertController, Platform, LoadingController, Loading, Nav, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

@Injectable()
export class UtilsService {

  private _loading: Loading;
  private isLoading: boolean = false;

  constructor(
    public alertConstructor: AlertController,
    public platform: Platform,
    public loadingController: LoadingController,
    public statusBar: StatusBar,) {
  }



  /**
   * Prompts an alert into the screen
   * @param {string} title Title of the alert
   * @param {string} msg Message of the alert
   * @param {Array<Object>} buttons (optional) Array of buttons. By default 'OK'
   */
  public showAlert(title: string, msg: string, buttons?: Array<Object>): void {
    this.alertConstructor.create({
      title: title,
      subTitle: msg,
      buttons: buttons || ['OK']
    }).present();
  }


  /**
   * Displays a loading mask into the screen
   * @param {string} message Message to display
   */
  public showLoading(message?: string): void {
    // Remove the loading mask in case there is something
    if (message) {
      if (this.loading) {
        this.loading.dismiss()
          .catch(() => { });
      }
      this.loading = this.loadingController.create({
        content: message
      });
      this.loading.present();
    } else if (!this.isLoading) {
      this.loading = this.loadingController.create();
      this.loading.present();
    }
    this.isLoading = true;
  }

  /**
   * Remove the current loading mask from the screem
   */
  public removeLoading(): void {
    if (this.loading && this.isLoading) {
      setTimeout(() => {
        this.isLoading = false;
        this.loading.dismiss()
          .catch(() => { });
      });
    }
  }

  /**
   * Method that provides a deep clone of and object respecting the original classes
   * @param {Object} originalObject object base to clone
   * @param {boolean} circular if true then circular references are checked and each
   * identical objects are reconnected (referenced), if false then nested object are blindly cloned
   * @return {Object} cloned object
   */

  /* tslint:disable */
  public clone(originalObject: Object | Array<Object>, circular: boolean): any {
    /* tslint:enable */
    // First create an empty object with
    // same prototype of our original source

    var propertyIndex,
      descriptor,
      keys,
      current,
      nextSource,
      indexOf,
      copies = [{
        source: originalObject,
        target: Object.create(Object.getPrototypeOf(originalObject))
      }],
      cloneObject = copies[0].target,
      sourceReferences = [originalObject],
      targetReferences = [cloneObject];

    // First in, first out
    while (current = copies.shift()) {
      keys = Object.getOwnPropertyNames(current.source);

      for (propertyIndex = 0; propertyIndex < keys.length; propertyIndex++) {
        // Save the source's descriptor
        descriptor = Object.getOwnPropertyDescriptor(current.source, keys[propertyIndex]);

        if (!descriptor.value || typeof descriptor.value !== 'object') {
          Object.defineProperty(current.target, keys[propertyIndex], descriptor);
          continue;
        }

        nextSource = descriptor.value;
        descriptor.value = Array.isArray(nextSource) ?
          [] :
          Object.create(Object.getPrototypeOf(nextSource));

        if (circular) {
          indexOf = sourceReferences.indexOf(nextSource);

          if (indexOf !== -1) {
            // The source is already referenced, just assign reference
            descriptor.value = targetReferences[indexOf];
            Object.defineProperty(current.target, keys[propertyIndex], descriptor);
            continue;
          }

          sourceReferences.push(nextSource);
          targetReferences.push(descriptor.value);
        }

        Object.defineProperty(current.target, keys[propertyIndex], descriptor);

        copies.push({ source: nextSource, target: descriptor.value });
      }
    }

    return cloneObject;
  }


  /**
   * Getters and Setters
   */

  public get loading(): Loading {
    return this._loading;
  }

  public set loading(value: Loading) {
    this._loading = value;
  }


}
