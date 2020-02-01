import { Routes } from "@angular/router";
import { GetRequestComponent } from 'src/app/in-memory-server/get-request/get-request.component';
import { PostDataComponent } from 'src/app/in-memory-server/post-data/post-data.component';
import { RequestOptionsComponent } from 'src/app/in-memory-server/request-options/request-options.component';
import { UrlSearchParamsComponent } from 'src/app/in-memory-server/url-search-params/url-search-params.component';
// import { GetRequestComponent, PostDataComponent, RequestOptionsComponent, SearchParamsComponent } from "./sample01_inMemServer/index"

export const routes: Routes = [
    {
        path: "",
        redirectTo: "sample1",
        pathMatch: "full"
    },
    {
        path: "sample1",
        component: GetRequestComponent
    }, 
    {
        path: "sample2",
        component: PostDataComponent
    },
    {
        path: "sample3",
        component: RequestOptionsComponent
    },
    {
        path: "sample4",
        component: UrlSearchParamsComponent
    },
];