import { DetailedContent, findItemById } from "./content-types";
import { Viewer } from "./models";

export class ContentManager{
    contentItems: DetailedContent[] = [];
    viewers:Map<number, Viewer[]> = new Map()

    addContent(item:DetailedContent){
        this.contentItems.push(item)
        this.viewers.set(item.id, [])
        return `Content "${item.title}" (ID: ${item.id}) has been added.`
    }

    markAsWatched(contentId:number, viewer:Viewer){

        let viewerList = this.viewers.get(contentId)
        if(viewerList){
            this.viewers.set(contentId, [])
            return `Viewer ${viewer.name} marked content ID ${contentId} as watched.`
        }else{
            return `ERROR: Content with ID ${contentId} not found.`
        }
    }

    listAllContent(){
        return this.contentItems.map((item) => item.getDetails())
    }

    findContent(contentId: number){
        findItemById(this.contentItems, contentId)
    }

}