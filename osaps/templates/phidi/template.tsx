import { TSX, createComponentInstance, SciFlowDocumentData, TemplateComponent } from '@sciflow/export';

const RunningHead = createComponentInstance({
    kind: 'RunningHead',
    styles: `
    `,renderDOM() {
        const instance = this as TemplateComponent<any, SciFlowDocumentData>;
        // console.dir(instance.engine.data.metaData, {depth:2});
        const authors = instance.engine.data.document.authors;
        // console.log(authors);
        // console.log(authors.length);
        const getName = (author) => {
            if (!author) { return 'Unknown author'; }
            if (author.firstName || author.lastName) {
                return [author.firstName, author.lastName].filter(n => n !== null).join(' ');
            }
            if (author.name) { return author.name; }
            return 'Unknown author';
        };
        let author = getName(authors[0]);
        if (authors.length>1) {
            author = author + " et al.";
        }
        let contact = author + " <" + authors[0].kemail + ">";
        let orcid;
        if (typeof authors[0].orcid === "string" && authors[0].orcid.length > 0) {
            orcid = "ORCiD: " + authors[0].orcid;
        }else{
            orcid = "";
        }
        return {
            id: 'firstPageInfos',
            placement: 'body',
            dom:
            <style>{`
                :root {
                    --headerRight: "${instance.engine.data.document.title}";
                    --headerLeft: "${author}";
                    --doi: "${instance.engine.data.metaData.publication.doi}";
                    --firstpage: ${instance.engine.data.metaData.publication.firstpage};
                    --contact: "${contact}";
                    --orcid: "${orcid}";
                }\n`
                    }</style>
        }
    }
});

export const customRenderers = {};
export const customTemplateComponents = [RunningHead];
export const stylePaths = [
    { path: 'styles.scss', position: 'start' },
    { path: 'overrides.scss', position: 'end' }
];
