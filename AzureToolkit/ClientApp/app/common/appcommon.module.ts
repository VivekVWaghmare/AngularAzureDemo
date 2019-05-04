import { NgModule } from '@angular/core';
import { UserService } from './services/user.service';
import { AzureHttpClient } from './services/azureHttpClient';
import { CognitiveService } from './services/cognitive.service';

@NgModule({
    providers: [AzureHttpClient, CognitiveService, UserService]
})

export class AppCommonModule{

}
